/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, InstagramInboxRuleTrigger } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateInstagramInboxRuleTrigger(options?: Omit<(UseMutationOptions<(InstagramInboxRuleTrigger | undefined), DefaultError, Prisma.InstagramInboxRuleTriggerCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.InstagramInboxRuleTriggerCreateArgs, DefaultError, InstagramInboxRuleTrigger, true>('InstagramInboxRuleTrigger', 'POST', `${endpoint}/instagramInboxRuleTrigger/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.InstagramInboxRuleTriggerCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.InstagramInboxRuleTriggerCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, InstagramInboxRuleTrigger, Prisma.InstagramInboxRuleTriggerGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.InstagramInboxRuleTriggerCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, InstagramInboxRuleTrigger, Prisma.InstagramInboxRuleTriggerGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyInstagramInboxRuleTrigger(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.InstagramInboxRuleTriggerCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.InstagramInboxRuleTriggerCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('InstagramInboxRuleTrigger', 'POST', `${endpoint}/instagramInboxRuleTrigger/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.InstagramInboxRuleTriggerCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.InstagramInboxRuleTriggerCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.InstagramInboxRuleTriggerCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyInstagramInboxRuleTrigger<TArgs extends Prisma.InstagramInboxRuleTriggerFindManyArgs, TQueryFnData = Array<Prisma.InstagramInboxRuleTriggerGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.InstagramInboxRuleTriggerFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('InstagramInboxRuleTrigger', `${endpoint}/instagramInboxRuleTrigger/findMany`, args, options, fetch);
}

export function useInfiniteFindManyInstagramInboxRuleTrigger<TArgs extends Prisma.InstagramInboxRuleTriggerFindManyArgs, TQueryFnData = Array<Prisma.InstagramInboxRuleTriggerGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.InstagramInboxRuleTriggerFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('InstagramInboxRuleTrigger', `${endpoint}/instagramInboxRuleTrigger/findMany`, args, options, fetch);
}

export function useSuspenseFindManyInstagramInboxRuleTrigger<TArgs extends Prisma.InstagramInboxRuleTriggerFindManyArgs, TQueryFnData = Array<Prisma.InstagramInboxRuleTriggerGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.InstagramInboxRuleTriggerFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('InstagramInboxRuleTrigger', `${endpoint}/instagramInboxRuleTrigger/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyInstagramInboxRuleTrigger<TArgs extends Prisma.InstagramInboxRuleTriggerFindManyArgs, TQueryFnData = Array<Prisma.InstagramInboxRuleTriggerGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.InstagramInboxRuleTriggerFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('InstagramInboxRuleTrigger', `${endpoint}/instagramInboxRuleTrigger/findMany`, args, options, fetch);
}

export function useFindUniqueInstagramInboxRuleTrigger<TArgs extends Prisma.InstagramInboxRuleTriggerFindUniqueArgs, TQueryFnData = Prisma.InstagramInboxRuleTriggerGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.InstagramInboxRuleTriggerFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('InstagramInboxRuleTrigger', `${endpoint}/instagramInboxRuleTrigger/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueInstagramInboxRuleTrigger<TArgs extends Prisma.InstagramInboxRuleTriggerFindUniqueArgs, TQueryFnData = Prisma.InstagramInboxRuleTriggerGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.InstagramInboxRuleTriggerFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('InstagramInboxRuleTrigger', `${endpoint}/instagramInboxRuleTrigger/findUnique`, args, options, fetch);
}

export function useFindFirstInstagramInboxRuleTrigger<TArgs extends Prisma.InstagramInboxRuleTriggerFindFirstArgs, TQueryFnData = Prisma.InstagramInboxRuleTriggerGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.InstagramInboxRuleTriggerFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('InstagramInboxRuleTrigger', `${endpoint}/instagramInboxRuleTrigger/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstInstagramInboxRuleTrigger<TArgs extends Prisma.InstagramInboxRuleTriggerFindFirstArgs, TQueryFnData = Prisma.InstagramInboxRuleTriggerGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.InstagramInboxRuleTriggerFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('InstagramInboxRuleTrigger', `${endpoint}/instagramInboxRuleTrigger/findFirst`, args, options, fetch);
}

export function useUpdateInstagramInboxRuleTrigger(options?: Omit<(UseMutationOptions<(InstagramInboxRuleTrigger | undefined), DefaultError, Prisma.InstagramInboxRuleTriggerUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.InstagramInboxRuleTriggerUpdateArgs, DefaultError, InstagramInboxRuleTrigger, true>('InstagramInboxRuleTrigger', 'PUT', `${endpoint}/instagramInboxRuleTrigger/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.InstagramInboxRuleTriggerUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.InstagramInboxRuleTriggerUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, InstagramInboxRuleTrigger, Prisma.InstagramInboxRuleTriggerGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.InstagramInboxRuleTriggerUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, InstagramInboxRuleTrigger, Prisma.InstagramInboxRuleTriggerGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyInstagramInboxRuleTrigger(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.InstagramInboxRuleTriggerUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.InstagramInboxRuleTriggerUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('InstagramInboxRuleTrigger', 'PUT', `${endpoint}/instagramInboxRuleTrigger/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.InstagramInboxRuleTriggerUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.InstagramInboxRuleTriggerUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.InstagramInboxRuleTriggerUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertInstagramInboxRuleTrigger(options?: Omit<(UseMutationOptions<(InstagramInboxRuleTrigger | undefined), DefaultError, Prisma.InstagramInboxRuleTriggerUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.InstagramInboxRuleTriggerUpsertArgs, DefaultError, InstagramInboxRuleTrigger, true>('InstagramInboxRuleTrigger', 'POST', `${endpoint}/instagramInboxRuleTrigger/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.InstagramInboxRuleTriggerUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.InstagramInboxRuleTriggerUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, InstagramInboxRuleTrigger, Prisma.InstagramInboxRuleTriggerGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.InstagramInboxRuleTriggerUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, InstagramInboxRuleTrigger, Prisma.InstagramInboxRuleTriggerGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteInstagramInboxRuleTrigger(options?: Omit<(UseMutationOptions<(InstagramInboxRuleTrigger | undefined), DefaultError, Prisma.InstagramInboxRuleTriggerDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.InstagramInboxRuleTriggerDeleteArgs, DefaultError, InstagramInboxRuleTrigger, true>('InstagramInboxRuleTrigger', 'DELETE', `${endpoint}/instagramInboxRuleTrigger/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.InstagramInboxRuleTriggerDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.InstagramInboxRuleTriggerDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, InstagramInboxRuleTrigger, Prisma.InstagramInboxRuleTriggerGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.InstagramInboxRuleTriggerDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, InstagramInboxRuleTrigger, Prisma.InstagramInboxRuleTriggerGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyInstagramInboxRuleTrigger(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.InstagramInboxRuleTriggerDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.InstagramInboxRuleTriggerDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('InstagramInboxRuleTrigger', 'DELETE', `${endpoint}/instagramInboxRuleTrigger/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.InstagramInboxRuleTriggerDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.InstagramInboxRuleTriggerDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.InstagramInboxRuleTriggerDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateInstagramInboxRuleTrigger<TArgs extends Prisma.InstagramInboxRuleTriggerAggregateArgs, TQueryFnData = Prisma.GetInstagramInboxRuleTriggerAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.InstagramInboxRuleTriggerAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('InstagramInboxRuleTrigger', `${endpoint}/instagramInboxRuleTrigger/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateInstagramInboxRuleTrigger<TArgs extends Prisma.InstagramInboxRuleTriggerAggregateArgs, TQueryFnData = Prisma.GetInstagramInboxRuleTriggerAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.InstagramInboxRuleTriggerAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('InstagramInboxRuleTrigger', `${endpoint}/instagramInboxRuleTrigger/aggregate`, args, options, fetch);
}

export function useGroupByInstagramInboxRuleTrigger<TArgs extends Prisma.InstagramInboxRuleTriggerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.InstagramInboxRuleTriggerGroupByArgs['orderBy'] } : { orderBy?: Prisma.InstagramInboxRuleTriggerGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.InstagramInboxRuleTriggerGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.InstagramInboxRuleTriggerGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.InstagramInboxRuleTriggerGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.InstagramInboxRuleTriggerGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.InstagramInboxRuleTriggerGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('InstagramInboxRuleTrigger', `${endpoint}/instagramInboxRuleTrigger/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByInstagramInboxRuleTrigger<TArgs extends Prisma.InstagramInboxRuleTriggerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.InstagramInboxRuleTriggerGroupByArgs['orderBy'] } : { orderBy?: Prisma.InstagramInboxRuleTriggerGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.InstagramInboxRuleTriggerGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.InstagramInboxRuleTriggerGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.InstagramInboxRuleTriggerGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.InstagramInboxRuleTriggerGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.InstagramInboxRuleTriggerGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('InstagramInboxRuleTrigger', `${endpoint}/instagramInboxRuleTrigger/groupBy`, args, options, fetch);
}

export function useCountInstagramInboxRuleTrigger<TArgs extends Prisma.InstagramInboxRuleTriggerCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.InstagramInboxRuleTriggerCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.InstagramInboxRuleTriggerCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('InstagramInboxRuleTrigger', `${endpoint}/instagramInboxRuleTrigger/count`, args, options, fetch);
}

export function useSuspenseCountInstagramInboxRuleTrigger<TArgs extends Prisma.InstagramInboxRuleTriggerCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.InstagramInboxRuleTriggerCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.InstagramInboxRuleTriggerCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('InstagramInboxRuleTrigger', `${endpoint}/instagramInboxRuleTrigger/count`, args, options, fetch);
}
import type { InstagramTriggerEvent } from '@prisma/client';

export function useCheckInstagramInboxRuleTrigger<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; inboxRuleTriggerId?: string; event?: InstagramTriggerEvent }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('InstagramInboxRuleTrigger', `${endpoint}/instagramInboxRuleTrigger/check`, args, options, fetch);
}
