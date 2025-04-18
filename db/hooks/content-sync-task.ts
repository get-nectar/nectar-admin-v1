/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, ContentSyncTask } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateContentSyncTask(options?: Omit<(UseMutationOptions<(ContentSyncTask | undefined), DefaultError, Prisma.ContentSyncTaskCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ContentSyncTaskCreateArgs, DefaultError, ContentSyncTask, true>('ContentSyncTask', 'POST', `${endpoint}/contentSyncTask/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ContentSyncTaskCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContentSyncTaskCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ContentSyncTask, Prisma.ContentSyncTaskGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ContentSyncTaskCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ContentSyncTask, Prisma.ContentSyncTaskGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyContentSyncTask(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ContentSyncTaskCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ContentSyncTaskCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('ContentSyncTask', 'POST', `${endpoint}/contentSyncTask/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ContentSyncTaskCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContentSyncTaskCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ContentSyncTaskCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyContentSyncTask<TArgs extends Prisma.ContentSyncTaskFindManyArgs, TQueryFnData = Array<Prisma.ContentSyncTaskGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentSyncTaskFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ContentSyncTask', `${endpoint}/contentSyncTask/findMany`, args, options, fetch);
}

export function useInfiniteFindManyContentSyncTask<TArgs extends Prisma.ContentSyncTaskFindManyArgs, TQueryFnData = Array<Prisma.ContentSyncTaskGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentSyncTaskFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('ContentSyncTask', `${endpoint}/contentSyncTask/findMany`, args, options, fetch);
}

export function useSuspenseFindManyContentSyncTask<TArgs extends Prisma.ContentSyncTaskFindManyArgs, TQueryFnData = Array<Prisma.ContentSyncTaskGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentSyncTaskFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ContentSyncTask', `${endpoint}/contentSyncTask/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyContentSyncTask<TArgs extends Prisma.ContentSyncTaskFindManyArgs, TQueryFnData = Array<Prisma.ContentSyncTaskGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentSyncTaskFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('ContentSyncTask', `${endpoint}/contentSyncTask/findMany`, args, options, fetch);
}

export function useFindUniqueContentSyncTask<TArgs extends Prisma.ContentSyncTaskFindUniqueArgs, TQueryFnData = Prisma.ContentSyncTaskGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ContentSyncTaskFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ContentSyncTask', `${endpoint}/contentSyncTask/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueContentSyncTask<TArgs extends Prisma.ContentSyncTaskFindUniqueArgs, TQueryFnData = Prisma.ContentSyncTaskGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ContentSyncTaskFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ContentSyncTask', `${endpoint}/contentSyncTask/findUnique`, args, options, fetch);
}

export function useFindFirstContentSyncTask<TArgs extends Prisma.ContentSyncTaskFindFirstArgs, TQueryFnData = Prisma.ContentSyncTaskGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentSyncTaskFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ContentSyncTask', `${endpoint}/contentSyncTask/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstContentSyncTask<TArgs extends Prisma.ContentSyncTaskFindFirstArgs, TQueryFnData = Prisma.ContentSyncTaskGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentSyncTaskFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ContentSyncTask', `${endpoint}/contentSyncTask/findFirst`, args, options, fetch);
}

export function useUpdateContentSyncTask(options?: Omit<(UseMutationOptions<(ContentSyncTask | undefined), DefaultError, Prisma.ContentSyncTaskUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ContentSyncTaskUpdateArgs, DefaultError, ContentSyncTask, true>('ContentSyncTask', 'PUT', `${endpoint}/contentSyncTask/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ContentSyncTaskUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContentSyncTaskUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ContentSyncTask, Prisma.ContentSyncTaskGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ContentSyncTaskUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ContentSyncTask, Prisma.ContentSyncTaskGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyContentSyncTask(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ContentSyncTaskUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ContentSyncTaskUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('ContentSyncTask', 'PUT', `${endpoint}/contentSyncTask/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ContentSyncTaskUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContentSyncTaskUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ContentSyncTaskUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertContentSyncTask(options?: Omit<(UseMutationOptions<(ContentSyncTask | undefined), DefaultError, Prisma.ContentSyncTaskUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ContentSyncTaskUpsertArgs, DefaultError, ContentSyncTask, true>('ContentSyncTask', 'POST', `${endpoint}/contentSyncTask/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ContentSyncTaskUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContentSyncTaskUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ContentSyncTask, Prisma.ContentSyncTaskGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ContentSyncTaskUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ContentSyncTask, Prisma.ContentSyncTaskGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteContentSyncTask(options?: Omit<(UseMutationOptions<(ContentSyncTask | undefined), DefaultError, Prisma.ContentSyncTaskDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ContentSyncTaskDeleteArgs, DefaultError, ContentSyncTask, true>('ContentSyncTask', 'DELETE', `${endpoint}/contentSyncTask/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ContentSyncTaskDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContentSyncTaskDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ContentSyncTask, Prisma.ContentSyncTaskGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ContentSyncTaskDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ContentSyncTask, Prisma.ContentSyncTaskGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyContentSyncTask(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ContentSyncTaskDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ContentSyncTaskDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('ContentSyncTask', 'DELETE', `${endpoint}/contentSyncTask/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ContentSyncTaskDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContentSyncTaskDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ContentSyncTaskDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateContentSyncTask<TArgs extends Prisma.ContentSyncTaskAggregateArgs, TQueryFnData = Prisma.GetContentSyncTaskAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ContentSyncTaskAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ContentSyncTask', `${endpoint}/contentSyncTask/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateContentSyncTask<TArgs extends Prisma.ContentSyncTaskAggregateArgs, TQueryFnData = Prisma.GetContentSyncTaskAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ContentSyncTaskAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ContentSyncTask', `${endpoint}/contentSyncTask/aggregate`, args, options, fetch);
}

export function useGroupByContentSyncTask<TArgs extends Prisma.ContentSyncTaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ContentSyncTaskGroupByArgs['orderBy'] } : { orderBy?: Prisma.ContentSyncTaskGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ContentSyncTaskGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ContentSyncTaskGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ContentSyncTaskGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ContentSyncTaskGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ContentSyncTaskGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ContentSyncTask', `${endpoint}/contentSyncTask/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByContentSyncTask<TArgs extends Prisma.ContentSyncTaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ContentSyncTaskGroupByArgs['orderBy'] } : { orderBy?: Prisma.ContentSyncTaskGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ContentSyncTaskGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ContentSyncTaskGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ContentSyncTaskGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ContentSyncTaskGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ContentSyncTaskGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ContentSyncTask', `${endpoint}/contentSyncTask/groupBy`, args, options, fetch);
}

export function useCountContentSyncTask<TArgs extends Prisma.ContentSyncTaskCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ContentSyncTaskCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentSyncTaskCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ContentSyncTask', `${endpoint}/contentSyncTask/count`, args, options, fetch);
}

export function useSuspenseCountContentSyncTask<TArgs extends Prisma.ContentSyncTaskCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ContentSyncTaskCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentSyncTaskCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ContentSyncTask', `${endpoint}/contentSyncTask/count`, args, options, fetch);
}
import type { SyncStatus, Platform } from '@prisma/client';

export function useCheckContentSyncTask<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; contentId?: string; status?: SyncStatus; platform?: Platform; facebookPageAccountId?: string; instagramAccountId?: string; platformUserId?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('ContentSyncTask', `${endpoint}/contentSyncTask/check`, args, options, fetch);
}
