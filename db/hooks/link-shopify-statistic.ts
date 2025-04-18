/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, LinkShopifyStatistic } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateLinkShopifyStatistic(options?: Omit<(UseMutationOptions<(LinkShopifyStatistic | undefined), DefaultError, Prisma.LinkShopifyStatisticCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.LinkShopifyStatisticCreateArgs, DefaultError, LinkShopifyStatistic, true>('LinkShopifyStatistic', 'POST', `${endpoint}/linkShopifyStatistic/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.LinkShopifyStatisticCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.LinkShopifyStatisticCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, LinkShopifyStatistic, Prisma.LinkShopifyStatisticGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.LinkShopifyStatisticCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, LinkShopifyStatistic, Prisma.LinkShopifyStatisticGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyLinkShopifyStatistic(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.LinkShopifyStatisticCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.LinkShopifyStatisticCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('LinkShopifyStatistic', 'POST', `${endpoint}/linkShopifyStatistic/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.LinkShopifyStatisticCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.LinkShopifyStatisticCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.LinkShopifyStatisticCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyLinkShopifyStatistic<TArgs extends Prisma.LinkShopifyStatisticFindManyArgs, TQueryFnData = Array<Prisma.LinkShopifyStatisticGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.LinkShopifyStatisticFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('LinkShopifyStatistic', `${endpoint}/linkShopifyStatistic/findMany`, args, options, fetch);
}

export function useInfiniteFindManyLinkShopifyStatistic<TArgs extends Prisma.LinkShopifyStatisticFindManyArgs, TQueryFnData = Array<Prisma.LinkShopifyStatisticGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.LinkShopifyStatisticFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('LinkShopifyStatistic', `${endpoint}/linkShopifyStatistic/findMany`, args, options, fetch);
}

export function useSuspenseFindManyLinkShopifyStatistic<TArgs extends Prisma.LinkShopifyStatisticFindManyArgs, TQueryFnData = Array<Prisma.LinkShopifyStatisticGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.LinkShopifyStatisticFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('LinkShopifyStatistic', `${endpoint}/linkShopifyStatistic/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyLinkShopifyStatistic<TArgs extends Prisma.LinkShopifyStatisticFindManyArgs, TQueryFnData = Array<Prisma.LinkShopifyStatisticGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.LinkShopifyStatisticFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('LinkShopifyStatistic', `${endpoint}/linkShopifyStatistic/findMany`, args, options, fetch);
}

export function useFindUniqueLinkShopifyStatistic<TArgs extends Prisma.LinkShopifyStatisticFindUniqueArgs, TQueryFnData = Prisma.LinkShopifyStatisticGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.LinkShopifyStatisticFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('LinkShopifyStatistic', `${endpoint}/linkShopifyStatistic/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueLinkShopifyStatistic<TArgs extends Prisma.LinkShopifyStatisticFindUniqueArgs, TQueryFnData = Prisma.LinkShopifyStatisticGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.LinkShopifyStatisticFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('LinkShopifyStatistic', `${endpoint}/linkShopifyStatistic/findUnique`, args, options, fetch);
}

export function useFindFirstLinkShopifyStatistic<TArgs extends Prisma.LinkShopifyStatisticFindFirstArgs, TQueryFnData = Prisma.LinkShopifyStatisticGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.LinkShopifyStatisticFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('LinkShopifyStatistic', `${endpoint}/linkShopifyStatistic/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstLinkShopifyStatistic<TArgs extends Prisma.LinkShopifyStatisticFindFirstArgs, TQueryFnData = Prisma.LinkShopifyStatisticGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.LinkShopifyStatisticFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('LinkShopifyStatistic', `${endpoint}/linkShopifyStatistic/findFirst`, args, options, fetch);
}

export function useUpdateLinkShopifyStatistic(options?: Omit<(UseMutationOptions<(LinkShopifyStatistic | undefined), DefaultError, Prisma.LinkShopifyStatisticUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.LinkShopifyStatisticUpdateArgs, DefaultError, LinkShopifyStatistic, true>('LinkShopifyStatistic', 'PUT', `${endpoint}/linkShopifyStatistic/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.LinkShopifyStatisticUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.LinkShopifyStatisticUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, LinkShopifyStatistic, Prisma.LinkShopifyStatisticGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.LinkShopifyStatisticUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, LinkShopifyStatistic, Prisma.LinkShopifyStatisticGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyLinkShopifyStatistic(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.LinkShopifyStatisticUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.LinkShopifyStatisticUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('LinkShopifyStatistic', 'PUT', `${endpoint}/linkShopifyStatistic/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.LinkShopifyStatisticUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.LinkShopifyStatisticUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.LinkShopifyStatisticUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertLinkShopifyStatistic(options?: Omit<(UseMutationOptions<(LinkShopifyStatistic | undefined), DefaultError, Prisma.LinkShopifyStatisticUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.LinkShopifyStatisticUpsertArgs, DefaultError, LinkShopifyStatistic, true>('LinkShopifyStatistic', 'POST', `${endpoint}/linkShopifyStatistic/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.LinkShopifyStatisticUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.LinkShopifyStatisticUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, LinkShopifyStatistic, Prisma.LinkShopifyStatisticGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.LinkShopifyStatisticUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, LinkShopifyStatistic, Prisma.LinkShopifyStatisticGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteLinkShopifyStatistic(options?: Omit<(UseMutationOptions<(LinkShopifyStatistic | undefined), DefaultError, Prisma.LinkShopifyStatisticDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.LinkShopifyStatisticDeleteArgs, DefaultError, LinkShopifyStatistic, true>('LinkShopifyStatistic', 'DELETE', `${endpoint}/linkShopifyStatistic/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.LinkShopifyStatisticDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.LinkShopifyStatisticDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, LinkShopifyStatistic, Prisma.LinkShopifyStatisticGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.LinkShopifyStatisticDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, LinkShopifyStatistic, Prisma.LinkShopifyStatisticGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyLinkShopifyStatistic(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.LinkShopifyStatisticDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.LinkShopifyStatisticDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('LinkShopifyStatistic', 'DELETE', `${endpoint}/linkShopifyStatistic/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.LinkShopifyStatisticDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.LinkShopifyStatisticDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.LinkShopifyStatisticDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateLinkShopifyStatistic<TArgs extends Prisma.LinkShopifyStatisticAggregateArgs, TQueryFnData = Prisma.GetLinkShopifyStatisticAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.LinkShopifyStatisticAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('LinkShopifyStatistic', `${endpoint}/linkShopifyStatistic/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateLinkShopifyStatistic<TArgs extends Prisma.LinkShopifyStatisticAggregateArgs, TQueryFnData = Prisma.GetLinkShopifyStatisticAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.LinkShopifyStatisticAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('LinkShopifyStatistic', `${endpoint}/linkShopifyStatistic/aggregate`, args, options, fetch);
}

export function useGroupByLinkShopifyStatistic<TArgs extends Prisma.LinkShopifyStatisticGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.LinkShopifyStatisticGroupByArgs['orderBy'] } : { orderBy?: Prisma.LinkShopifyStatisticGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.LinkShopifyStatisticGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.LinkShopifyStatisticGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.LinkShopifyStatisticGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.LinkShopifyStatisticGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.LinkShopifyStatisticGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('LinkShopifyStatistic', `${endpoint}/linkShopifyStatistic/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByLinkShopifyStatistic<TArgs extends Prisma.LinkShopifyStatisticGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.LinkShopifyStatisticGroupByArgs['orderBy'] } : { orderBy?: Prisma.LinkShopifyStatisticGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.LinkShopifyStatisticGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.LinkShopifyStatisticGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.LinkShopifyStatisticGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.LinkShopifyStatisticGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.LinkShopifyStatisticGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('LinkShopifyStatistic', `${endpoint}/linkShopifyStatistic/groupBy`, args, options, fetch);
}

export function useCountLinkShopifyStatistic<TArgs extends Prisma.LinkShopifyStatisticCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.LinkShopifyStatisticCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.LinkShopifyStatisticCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('LinkShopifyStatistic', `${endpoint}/linkShopifyStatistic/count`, args, options, fetch);
}

export function useSuspenseCountLinkShopifyStatistic<TArgs extends Prisma.LinkShopifyStatisticCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.LinkShopifyStatisticCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.LinkShopifyStatisticCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('LinkShopifyStatistic', `${endpoint}/linkShopifyStatistic/count`, args, options, fetch);
}
import type { ActivityType } from '@prisma/client';

export function useCheckLinkShopifyStatistic<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; resourceId?: string; viewCount?: number; uniqueViewCount?: number; type?: ActivityType; linkId?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('LinkShopifyStatistic', `${endpoint}/linkShopifyStatistic/check`, args, options, fetch);
}
