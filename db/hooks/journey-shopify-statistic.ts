/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, JourneyShopifyStatistic } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateJourneyShopifyStatistic(options?: Omit<(UseMutationOptions<(JourneyShopifyStatistic | undefined), DefaultError, Prisma.JourneyShopifyStatisticCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.JourneyShopifyStatisticCreateArgs, DefaultError, JourneyShopifyStatistic, true>('JourneyShopifyStatistic', 'POST', `${endpoint}/journeyShopifyStatistic/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.JourneyShopifyStatisticCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.JourneyShopifyStatisticCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, JourneyShopifyStatistic, Prisma.JourneyShopifyStatisticGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.JourneyShopifyStatisticCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, JourneyShopifyStatistic, Prisma.JourneyShopifyStatisticGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyJourneyShopifyStatistic(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.JourneyShopifyStatisticCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.JourneyShopifyStatisticCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('JourneyShopifyStatistic', 'POST', `${endpoint}/journeyShopifyStatistic/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.JourneyShopifyStatisticCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.JourneyShopifyStatisticCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.JourneyShopifyStatisticCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyJourneyShopifyStatistic<TArgs extends Prisma.JourneyShopifyStatisticFindManyArgs, TQueryFnData = Array<Prisma.JourneyShopifyStatisticGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.JourneyShopifyStatisticFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('JourneyShopifyStatistic', `${endpoint}/journeyShopifyStatistic/findMany`, args, options, fetch);
}

export function useInfiniteFindManyJourneyShopifyStatistic<TArgs extends Prisma.JourneyShopifyStatisticFindManyArgs, TQueryFnData = Array<Prisma.JourneyShopifyStatisticGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.JourneyShopifyStatisticFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('JourneyShopifyStatistic', `${endpoint}/journeyShopifyStatistic/findMany`, args, options, fetch);
}

export function useSuspenseFindManyJourneyShopifyStatistic<TArgs extends Prisma.JourneyShopifyStatisticFindManyArgs, TQueryFnData = Array<Prisma.JourneyShopifyStatisticGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.JourneyShopifyStatisticFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('JourneyShopifyStatistic', `${endpoint}/journeyShopifyStatistic/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyJourneyShopifyStatistic<TArgs extends Prisma.JourneyShopifyStatisticFindManyArgs, TQueryFnData = Array<Prisma.JourneyShopifyStatisticGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.JourneyShopifyStatisticFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('JourneyShopifyStatistic', `${endpoint}/journeyShopifyStatistic/findMany`, args, options, fetch);
}

export function useFindUniqueJourneyShopifyStatistic<TArgs extends Prisma.JourneyShopifyStatisticFindUniqueArgs, TQueryFnData = Prisma.JourneyShopifyStatisticGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.JourneyShopifyStatisticFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('JourneyShopifyStatistic', `${endpoint}/journeyShopifyStatistic/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueJourneyShopifyStatistic<TArgs extends Prisma.JourneyShopifyStatisticFindUniqueArgs, TQueryFnData = Prisma.JourneyShopifyStatisticGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.JourneyShopifyStatisticFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('JourneyShopifyStatistic', `${endpoint}/journeyShopifyStatistic/findUnique`, args, options, fetch);
}

export function useFindFirstJourneyShopifyStatistic<TArgs extends Prisma.JourneyShopifyStatisticFindFirstArgs, TQueryFnData = Prisma.JourneyShopifyStatisticGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.JourneyShopifyStatisticFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('JourneyShopifyStatistic', `${endpoint}/journeyShopifyStatistic/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstJourneyShopifyStatistic<TArgs extends Prisma.JourneyShopifyStatisticFindFirstArgs, TQueryFnData = Prisma.JourneyShopifyStatisticGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.JourneyShopifyStatisticFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('JourneyShopifyStatistic', `${endpoint}/journeyShopifyStatistic/findFirst`, args, options, fetch);
}

export function useUpdateJourneyShopifyStatistic(options?: Omit<(UseMutationOptions<(JourneyShopifyStatistic | undefined), DefaultError, Prisma.JourneyShopifyStatisticUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.JourneyShopifyStatisticUpdateArgs, DefaultError, JourneyShopifyStatistic, true>('JourneyShopifyStatistic', 'PUT', `${endpoint}/journeyShopifyStatistic/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.JourneyShopifyStatisticUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.JourneyShopifyStatisticUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, JourneyShopifyStatistic, Prisma.JourneyShopifyStatisticGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.JourneyShopifyStatisticUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, JourneyShopifyStatistic, Prisma.JourneyShopifyStatisticGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyJourneyShopifyStatistic(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.JourneyShopifyStatisticUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.JourneyShopifyStatisticUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('JourneyShopifyStatistic', 'PUT', `${endpoint}/journeyShopifyStatistic/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.JourneyShopifyStatisticUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.JourneyShopifyStatisticUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.JourneyShopifyStatisticUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertJourneyShopifyStatistic(options?: Omit<(UseMutationOptions<(JourneyShopifyStatistic | undefined), DefaultError, Prisma.JourneyShopifyStatisticUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.JourneyShopifyStatisticUpsertArgs, DefaultError, JourneyShopifyStatistic, true>('JourneyShopifyStatistic', 'POST', `${endpoint}/journeyShopifyStatistic/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.JourneyShopifyStatisticUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.JourneyShopifyStatisticUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, JourneyShopifyStatistic, Prisma.JourneyShopifyStatisticGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.JourneyShopifyStatisticUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, JourneyShopifyStatistic, Prisma.JourneyShopifyStatisticGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteJourneyShopifyStatistic(options?: Omit<(UseMutationOptions<(JourneyShopifyStatistic | undefined), DefaultError, Prisma.JourneyShopifyStatisticDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.JourneyShopifyStatisticDeleteArgs, DefaultError, JourneyShopifyStatistic, true>('JourneyShopifyStatistic', 'DELETE', `${endpoint}/journeyShopifyStatistic/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.JourneyShopifyStatisticDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.JourneyShopifyStatisticDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, JourneyShopifyStatistic, Prisma.JourneyShopifyStatisticGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.JourneyShopifyStatisticDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, JourneyShopifyStatistic, Prisma.JourneyShopifyStatisticGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyJourneyShopifyStatistic(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.JourneyShopifyStatisticDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.JourneyShopifyStatisticDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('JourneyShopifyStatistic', 'DELETE', `${endpoint}/journeyShopifyStatistic/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.JourneyShopifyStatisticDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.JourneyShopifyStatisticDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.JourneyShopifyStatisticDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateJourneyShopifyStatistic<TArgs extends Prisma.JourneyShopifyStatisticAggregateArgs, TQueryFnData = Prisma.GetJourneyShopifyStatisticAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.JourneyShopifyStatisticAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('JourneyShopifyStatistic', `${endpoint}/journeyShopifyStatistic/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateJourneyShopifyStatistic<TArgs extends Prisma.JourneyShopifyStatisticAggregateArgs, TQueryFnData = Prisma.GetJourneyShopifyStatisticAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.JourneyShopifyStatisticAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('JourneyShopifyStatistic', `${endpoint}/journeyShopifyStatistic/aggregate`, args, options, fetch);
}

export function useGroupByJourneyShopifyStatistic<TArgs extends Prisma.JourneyShopifyStatisticGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.JourneyShopifyStatisticGroupByArgs['orderBy'] } : { orderBy?: Prisma.JourneyShopifyStatisticGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.JourneyShopifyStatisticGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.JourneyShopifyStatisticGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.JourneyShopifyStatisticGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.JourneyShopifyStatisticGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.JourneyShopifyStatisticGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('JourneyShopifyStatistic', `${endpoint}/journeyShopifyStatistic/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByJourneyShopifyStatistic<TArgs extends Prisma.JourneyShopifyStatisticGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.JourneyShopifyStatisticGroupByArgs['orderBy'] } : { orderBy?: Prisma.JourneyShopifyStatisticGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.JourneyShopifyStatisticGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.JourneyShopifyStatisticGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.JourneyShopifyStatisticGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.JourneyShopifyStatisticGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.JourneyShopifyStatisticGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('JourneyShopifyStatistic', `${endpoint}/journeyShopifyStatistic/groupBy`, args, options, fetch);
}

export function useCountJourneyShopifyStatistic<TArgs extends Prisma.JourneyShopifyStatisticCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.JourneyShopifyStatisticCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.JourneyShopifyStatisticCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('JourneyShopifyStatistic', `${endpoint}/journeyShopifyStatistic/count`, args, options, fetch);
}

export function useSuspenseCountJourneyShopifyStatistic<TArgs extends Prisma.JourneyShopifyStatisticCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.JourneyShopifyStatisticCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.JourneyShopifyStatisticCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('JourneyShopifyStatistic', `${endpoint}/journeyShopifyStatistic/count`, args, options, fetch);
}
import type { ActivityType } from '@prisma/client';

export function useCheckJourneyShopifyStatistic<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; resourceId?: string; viewCount?: number; uniqueViewCount?: number; type?: ActivityType; journeyId?: string; originalUrl?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('JourneyShopifyStatistic', `${endpoint}/journeyShopifyStatistic/check`, args, options, fetch);
}
