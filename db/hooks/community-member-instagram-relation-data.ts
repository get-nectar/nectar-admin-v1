/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, CommunityMemberInstagramRelationData } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateCommunityMemberInstagramRelationData(options?: Omit<(UseMutationOptions<(CommunityMemberInstagramRelationData | undefined), DefaultError, Prisma.CommunityMemberInstagramRelationDataCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CommunityMemberInstagramRelationDataCreateArgs, DefaultError, CommunityMemberInstagramRelationData, true>('CommunityMemberInstagramRelationData', 'POST', `${endpoint}/communityMemberInstagramRelationData/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CommunityMemberInstagramRelationDataCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CommunityMemberInstagramRelationDataCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CommunityMemberInstagramRelationData, Prisma.CommunityMemberInstagramRelationDataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CommunityMemberInstagramRelationDataCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CommunityMemberInstagramRelationData, Prisma.CommunityMemberInstagramRelationDataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyCommunityMemberInstagramRelationData(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CommunityMemberInstagramRelationDataCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CommunityMemberInstagramRelationDataCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('CommunityMemberInstagramRelationData', 'POST', `${endpoint}/communityMemberInstagramRelationData/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CommunityMemberInstagramRelationDataCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CommunityMemberInstagramRelationDataCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CommunityMemberInstagramRelationDataCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyCommunityMemberInstagramRelationData<TArgs extends Prisma.CommunityMemberInstagramRelationDataFindManyArgs, TQueryFnData = Array<Prisma.CommunityMemberInstagramRelationDataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CommunityMemberInstagramRelationDataFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CommunityMemberInstagramRelationData', `${endpoint}/communityMemberInstagramRelationData/findMany`, args, options, fetch);
}

export function useInfiniteFindManyCommunityMemberInstagramRelationData<TArgs extends Prisma.CommunityMemberInstagramRelationDataFindManyArgs, TQueryFnData = Array<Prisma.CommunityMemberInstagramRelationDataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CommunityMemberInstagramRelationDataFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('CommunityMemberInstagramRelationData', `${endpoint}/communityMemberInstagramRelationData/findMany`, args, options, fetch);
}

export function useSuspenseFindManyCommunityMemberInstagramRelationData<TArgs extends Prisma.CommunityMemberInstagramRelationDataFindManyArgs, TQueryFnData = Array<Prisma.CommunityMemberInstagramRelationDataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CommunityMemberInstagramRelationDataFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CommunityMemberInstagramRelationData', `${endpoint}/communityMemberInstagramRelationData/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyCommunityMemberInstagramRelationData<TArgs extends Prisma.CommunityMemberInstagramRelationDataFindManyArgs, TQueryFnData = Array<Prisma.CommunityMemberInstagramRelationDataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CommunityMemberInstagramRelationDataFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('CommunityMemberInstagramRelationData', `${endpoint}/communityMemberInstagramRelationData/findMany`, args, options, fetch);
}

export function useFindUniqueCommunityMemberInstagramRelationData<TArgs extends Prisma.CommunityMemberInstagramRelationDataFindUniqueArgs, TQueryFnData = Prisma.CommunityMemberInstagramRelationDataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CommunityMemberInstagramRelationDataFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CommunityMemberInstagramRelationData', `${endpoint}/communityMemberInstagramRelationData/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueCommunityMemberInstagramRelationData<TArgs extends Prisma.CommunityMemberInstagramRelationDataFindUniqueArgs, TQueryFnData = Prisma.CommunityMemberInstagramRelationDataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CommunityMemberInstagramRelationDataFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CommunityMemberInstagramRelationData', `${endpoint}/communityMemberInstagramRelationData/findUnique`, args, options, fetch);
}

export function useFindFirstCommunityMemberInstagramRelationData<TArgs extends Prisma.CommunityMemberInstagramRelationDataFindFirstArgs, TQueryFnData = Prisma.CommunityMemberInstagramRelationDataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CommunityMemberInstagramRelationDataFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CommunityMemberInstagramRelationData', `${endpoint}/communityMemberInstagramRelationData/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstCommunityMemberInstagramRelationData<TArgs extends Prisma.CommunityMemberInstagramRelationDataFindFirstArgs, TQueryFnData = Prisma.CommunityMemberInstagramRelationDataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CommunityMemberInstagramRelationDataFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CommunityMemberInstagramRelationData', `${endpoint}/communityMemberInstagramRelationData/findFirst`, args, options, fetch);
}

export function useUpdateCommunityMemberInstagramRelationData(options?: Omit<(UseMutationOptions<(CommunityMemberInstagramRelationData | undefined), DefaultError, Prisma.CommunityMemberInstagramRelationDataUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CommunityMemberInstagramRelationDataUpdateArgs, DefaultError, CommunityMemberInstagramRelationData, true>('CommunityMemberInstagramRelationData', 'PUT', `${endpoint}/communityMemberInstagramRelationData/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CommunityMemberInstagramRelationDataUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CommunityMemberInstagramRelationDataUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CommunityMemberInstagramRelationData, Prisma.CommunityMemberInstagramRelationDataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CommunityMemberInstagramRelationDataUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CommunityMemberInstagramRelationData, Prisma.CommunityMemberInstagramRelationDataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyCommunityMemberInstagramRelationData(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CommunityMemberInstagramRelationDataUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CommunityMemberInstagramRelationDataUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('CommunityMemberInstagramRelationData', 'PUT', `${endpoint}/communityMemberInstagramRelationData/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CommunityMemberInstagramRelationDataUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CommunityMemberInstagramRelationDataUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CommunityMemberInstagramRelationDataUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertCommunityMemberInstagramRelationData(options?: Omit<(UseMutationOptions<(CommunityMemberInstagramRelationData | undefined), DefaultError, Prisma.CommunityMemberInstagramRelationDataUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CommunityMemberInstagramRelationDataUpsertArgs, DefaultError, CommunityMemberInstagramRelationData, true>('CommunityMemberInstagramRelationData', 'POST', `${endpoint}/communityMemberInstagramRelationData/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CommunityMemberInstagramRelationDataUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.CommunityMemberInstagramRelationDataUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CommunityMemberInstagramRelationData, Prisma.CommunityMemberInstagramRelationDataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CommunityMemberInstagramRelationDataUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CommunityMemberInstagramRelationData, Prisma.CommunityMemberInstagramRelationDataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteCommunityMemberInstagramRelationData(options?: Omit<(UseMutationOptions<(CommunityMemberInstagramRelationData | undefined), DefaultError, Prisma.CommunityMemberInstagramRelationDataDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CommunityMemberInstagramRelationDataDeleteArgs, DefaultError, CommunityMemberInstagramRelationData, true>('CommunityMemberInstagramRelationData', 'DELETE', `${endpoint}/communityMemberInstagramRelationData/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CommunityMemberInstagramRelationDataDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.CommunityMemberInstagramRelationDataDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CommunityMemberInstagramRelationData, Prisma.CommunityMemberInstagramRelationDataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CommunityMemberInstagramRelationDataDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CommunityMemberInstagramRelationData, Prisma.CommunityMemberInstagramRelationDataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyCommunityMemberInstagramRelationData(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CommunityMemberInstagramRelationDataDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CommunityMemberInstagramRelationDataDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('CommunityMemberInstagramRelationData', 'DELETE', `${endpoint}/communityMemberInstagramRelationData/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CommunityMemberInstagramRelationDataDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CommunityMemberInstagramRelationDataDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CommunityMemberInstagramRelationDataDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateCommunityMemberInstagramRelationData<TArgs extends Prisma.CommunityMemberInstagramRelationDataAggregateArgs, TQueryFnData = Prisma.GetCommunityMemberInstagramRelationDataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CommunityMemberInstagramRelationDataAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CommunityMemberInstagramRelationData', `${endpoint}/communityMemberInstagramRelationData/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateCommunityMemberInstagramRelationData<TArgs extends Prisma.CommunityMemberInstagramRelationDataAggregateArgs, TQueryFnData = Prisma.GetCommunityMemberInstagramRelationDataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CommunityMemberInstagramRelationDataAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CommunityMemberInstagramRelationData', `${endpoint}/communityMemberInstagramRelationData/aggregate`, args, options, fetch);
}

export function useGroupByCommunityMemberInstagramRelationData<TArgs extends Prisma.CommunityMemberInstagramRelationDataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.CommunityMemberInstagramRelationDataGroupByArgs['orderBy'] } : { orderBy?: Prisma.CommunityMemberInstagramRelationDataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.CommunityMemberInstagramRelationDataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.CommunityMemberInstagramRelationDataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.CommunityMemberInstagramRelationDataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.CommunityMemberInstagramRelationDataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.CommunityMemberInstagramRelationDataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CommunityMemberInstagramRelationData', `${endpoint}/communityMemberInstagramRelationData/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByCommunityMemberInstagramRelationData<TArgs extends Prisma.CommunityMemberInstagramRelationDataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.CommunityMemberInstagramRelationDataGroupByArgs['orderBy'] } : { orderBy?: Prisma.CommunityMemberInstagramRelationDataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.CommunityMemberInstagramRelationDataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.CommunityMemberInstagramRelationDataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.CommunityMemberInstagramRelationDataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.CommunityMemberInstagramRelationDataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.CommunityMemberInstagramRelationDataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CommunityMemberInstagramRelationData', `${endpoint}/communityMemberInstagramRelationData/groupBy`, args, options, fetch);
}

export function useCountCommunityMemberInstagramRelationData<TArgs extends Prisma.CommunityMemberInstagramRelationDataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.CommunityMemberInstagramRelationDataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CommunityMemberInstagramRelationDataCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CommunityMemberInstagramRelationData', `${endpoint}/communityMemberInstagramRelationData/count`, args, options, fetch);
}

export function useSuspenseCountCommunityMemberInstagramRelationData<TArgs extends Prisma.CommunityMemberInstagramRelationDataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.CommunityMemberInstagramRelationDataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CommunityMemberInstagramRelationDataCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CommunityMemberInstagramRelationData', `${endpoint}/communityMemberInstagramRelationData/count`, args, options, fetch);
}
import type { InstagramFollowingStatus } from '@prisma/client';

export function useCheckCommunityMemberInstagramRelationData<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; communityMemberId?: string; instagramAccountId?: string; scopedPlatformId?: string; followsOwnerAccount?: boolean; followedByOwnerAccount?: boolean; followingStatus?: InstagramFollowingStatus; commentCount?: number; tagMentionCount?: number; isEligibleForDM?: boolean }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('CommunityMemberInstagramRelationData', `${endpoint}/communityMemberInstagramRelationData/check`, args, options, fetch);
}
