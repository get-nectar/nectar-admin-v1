/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, SearchQueryTracker } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateSearchQueryTracker(options?: Omit<(UseMutationOptions<(SearchQueryTracker | undefined), DefaultError, Prisma.SearchQueryTrackerCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SearchQueryTrackerCreateArgs, DefaultError, SearchQueryTracker, true>('SearchQueryTracker', 'POST', `${endpoint}/searchQueryTracker/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SearchQueryTrackerCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SearchQueryTrackerCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, SearchQueryTracker, Prisma.SearchQueryTrackerGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SearchQueryTrackerCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, SearchQueryTracker, Prisma.SearchQueryTrackerGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManySearchQueryTracker(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SearchQueryTrackerCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SearchQueryTrackerCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('SearchQueryTracker', 'POST', `${endpoint}/searchQueryTracker/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SearchQueryTrackerCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SearchQueryTrackerCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.SearchQueryTrackerCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManySearchQueryTracker<TArgs extends Prisma.SearchQueryTrackerFindManyArgs, TQueryFnData = Array<Prisma.SearchQueryTrackerGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SearchQueryTrackerFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SearchQueryTracker', `${endpoint}/searchQueryTracker/findMany`, args, options, fetch);
}

export function useInfiniteFindManySearchQueryTracker<TArgs extends Prisma.SearchQueryTrackerFindManyArgs, TQueryFnData = Array<Prisma.SearchQueryTrackerGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SearchQueryTrackerFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('SearchQueryTracker', `${endpoint}/searchQueryTracker/findMany`, args, options, fetch);
}

export function useSuspenseFindManySearchQueryTracker<TArgs extends Prisma.SearchQueryTrackerFindManyArgs, TQueryFnData = Array<Prisma.SearchQueryTrackerGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SearchQueryTrackerFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('SearchQueryTracker', `${endpoint}/searchQueryTracker/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManySearchQueryTracker<TArgs extends Prisma.SearchQueryTrackerFindManyArgs, TQueryFnData = Array<Prisma.SearchQueryTrackerGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SearchQueryTrackerFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('SearchQueryTracker', `${endpoint}/searchQueryTracker/findMany`, args, options, fetch);
}

export function useFindUniqueSearchQueryTracker<TArgs extends Prisma.SearchQueryTrackerFindUniqueArgs, TQueryFnData = Prisma.SearchQueryTrackerGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SearchQueryTrackerFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SearchQueryTracker', `${endpoint}/searchQueryTracker/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueSearchQueryTracker<TArgs extends Prisma.SearchQueryTrackerFindUniqueArgs, TQueryFnData = Prisma.SearchQueryTrackerGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SearchQueryTrackerFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('SearchQueryTracker', `${endpoint}/searchQueryTracker/findUnique`, args, options, fetch);
}

export function useFindFirstSearchQueryTracker<TArgs extends Prisma.SearchQueryTrackerFindFirstArgs, TQueryFnData = Prisma.SearchQueryTrackerGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SearchQueryTrackerFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SearchQueryTracker', `${endpoint}/searchQueryTracker/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstSearchQueryTracker<TArgs extends Prisma.SearchQueryTrackerFindFirstArgs, TQueryFnData = Prisma.SearchQueryTrackerGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SearchQueryTrackerFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('SearchQueryTracker', `${endpoint}/searchQueryTracker/findFirst`, args, options, fetch);
}

export function useUpdateSearchQueryTracker(options?: Omit<(UseMutationOptions<(SearchQueryTracker | undefined), DefaultError, Prisma.SearchQueryTrackerUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SearchQueryTrackerUpdateArgs, DefaultError, SearchQueryTracker, true>('SearchQueryTracker', 'PUT', `${endpoint}/searchQueryTracker/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SearchQueryTrackerUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SearchQueryTrackerUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, SearchQueryTracker, Prisma.SearchQueryTrackerGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SearchQueryTrackerUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, SearchQueryTracker, Prisma.SearchQueryTrackerGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManySearchQueryTracker(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SearchQueryTrackerUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SearchQueryTrackerUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('SearchQueryTracker', 'PUT', `${endpoint}/searchQueryTracker/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SearchQueryTrackerUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SearchQueryTrackerUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.SearchQueryTrackerUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertSearchQueryTracker(options?: Omit<(UseMutationOptions<(SearchQueryTracker | undefined), DefaultError, Prisma.SearchQueryTrackerUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SearchQueryTrackerUpsertArgs, DefaultError, SearchQueryTracker, true>('SearchQueryTracker', 'POST', `${endpoint}/searchQueryTracker/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SearchQueryTrackerUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.SearchQueryTrackerUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, SearchQueryTracker, Prisma.SearchQueryTrackerGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SearchQueryTrackerUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, SearchQueryTracker, Prisma.SearchQueryTrackerGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteSearchQueryTracker(options?: Omit<(UseMutationOptions<(SearchQueryTracker | undefined), DefaultError, Prisma.SearchQueryTrackerDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SearchQueryTrackerDeleteArgs, DefaultError, SearchQueryTracker, true>('SearchQueryTracker', 'DELETE', `${endpoint}/searchQueryTracker/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SearchQueryTrackerDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.SearchQueryTrackerDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, SearchQueryTracker, Prisma.SearchQueryTrackerGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SearchQueryTrackerDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, SearchQueryTracker, Prisma.SearchQueryTrackerGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManySearchQueryTracker(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SearchQueryTrackerDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SearchQueryTrackerDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('SearchQueryTracker', 'DELETE', `${endpoint}/searchQueryTracker/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SearchQueryTrackerDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SearchQueryTrackerDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.SearchQueryTrackerDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateSearchQueryTracker<TArgs extends Prisma.SearchQueryTrackerAggregateArgs, TQueryFnData = Prisma.GetSearchQueryTrackerAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SearchQueryTrackerAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SearchQueryTracker', `${endpoint}/searchQueryTracker/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateSearchQueryTracker<TArgs extends Prisma.SearchQueryTrackerAggregateArgs, TQueryFnData = Prisma.GetSearchQueryTrackerAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SearchQueryTrackerAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('SearchQueryTracker', `${endpoint}/searchQueryTracker/aggregate`, args, options, fetch);
}

export function useGroupBySearchQueryTracker<TArgs extends Prisma.SearchQueryTrackerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.SearchQueryTrackerGroupByArgs['orderBy'] } : { orderBy?: Prisma.SearchQueryTrackerGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.SearchQueryTrackerGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.SearchQueryTrackerGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.SearchQueryTrackerGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.SearchQueryTrackerGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.SearchQueryTrackerGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SearchQueryTracker', `${endpoint}/searchQueryTracker/groupBy`, args, options, fetch);
}

export function useSuspenseGroupBySearchQueryTracker<TArgs extends Prisma.SearchQueryTrackerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.SearchQueryTrackerGroupByArgs['orderBy'] } : { orderBy?: Prisma.SearchQueryTrackerGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.SearchQueryTrackerGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.SearchQueryTrackerGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.SearchQueryTrackerGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.SearchQueryTrackerGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.SearchQueryTrackerGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('SearchQueryTracker', `${endpoint}/searchQueryTracker/groupBy`, args, options, fetch);
}

export function useCountSearchQueryTracker<TArgs extends Prisma.SearchQueryTrackerCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.SearchQueryTrackerCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SearchQueryTrackerCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SearchQueryTracker', `${endpoint}/searchQueryTracker/count`, args, options, fetch);
}

export function useSuspenseCountSearchQueryTracker<TArgs extends Prisma.SearchQueryTrackerCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.SearchQueryTrackerCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SearchQueryTrackerCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('SearchQueryTracker', `${endpoint}/searchQueryTracker/count`, args, options, fetch);
}
import type { Platform, SearchQueryPriority, SearchQueryTrackerStatus } from '@prisma/client';

export function useCheckSearchQueryTracker<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; searchQuery?: string; platform?: Platform; priority?: SearchQueryPriority; lastRunId?: string; lastRunStatus?: SearchQueryTrackerStatus }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('SearchQueryTracker', `${endpoint}/searchQueryTracker/check`, args, options, fetch);
}
