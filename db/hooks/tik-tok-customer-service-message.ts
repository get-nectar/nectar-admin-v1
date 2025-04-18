/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, TikTokCustomerServiceMessage } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateTikTokCustomerServiceMessage(options?: Omit<(UseMutationOptions<(TikTokCustomerServiceMessage | undefined), DefaultError, Prisma.TikTokCustomerServiceMessageCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TikTokCustomerServiceMessageCreateArgs, DefaultError, TikTokCustomerServiceMessage, true>('TikTokCustomerServiceMessage', 'POST', `${endpoint}/tikTokCustomerServiceMessage/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TikTokCustomerServiceMessageCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.TikTokCustomerServiceMessageCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, TikTokCustomerServiceMessage, Prisma.TikTokCustomerServiceMessageGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TikTokCustomerServiceMessageCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, TikTokCustomerServiceMessage, Prisma.TikTokCustomerServiceMessageGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyTikTokCustomerServiceMessage(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.TikTokCustomerServiceMessageCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TikTokCustomerServiceMessageCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('TikTokCustomerServiceMessage', 'POST', `${endpoint}/tikTokCustomerServiceMessage/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TikTokCustomerServiceMessageCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TikTokCustomerServiceMessageCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.TikTokCustomerServiceMessageCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyTikTokCustomerServiceMessage<TArgs extends Prisma.TikTokCustomerServiceMessageFindManyArgs, TQueryFnData = Array<Prisma.TikTokCustomerServiceMessageGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.TikTokCustomerServiceMessageFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('TikTokCustomerServiceMessage', `${endpoint}/tikTokCustomerServiceMessage/findMany`, args, options, fetch);
}

export function useInfiniteFindManyTikTokCustomerServiceMessage<TArgs extends Prisma.TikTokCustomerServiceMessageFindManyArgs, TQueryFnData = Array<Prisma.TikTokCustomerServiceMessageGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.TikTokCustomerServiceMessageFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('TikTokCustomerServiceMessage', `${endpoint}/tikTokCustomerServiceMessage/findMany`, args, options, fetch);
}

export function useSuspenseFindManyTikTokCustomerServiceMessage<TArgs extends Prisma.TikTokCustomerServiceMessageFindManyArgs, TQueryFnData = Array<Prisma.TikTokCustomerServiceMessageGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.TikTokCustomerServiceMessageFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('TikTokCustomerServiceMessage', `${endpoint}/tikTokCustomerServiceMessage/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyTikTokCustomerServiceMessage<TArgs extends Prisma.TikTokCustomerServiceMessageFindManyArgs, TQueryFnData = Array<Prisma.TikTokCustomerServiceMessageGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.TikTokCustomerServiceMessageFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('TikTokCustomerServiceMessage', `${endpoint}/tikTokCustomerServiceMessage/findMany`, args, options, fetch);
}

export function useFindUniqueTikTokCustomerServiceMessage<TArgs extends Prisma.TikTokCustomerServiceMessageFindUniqueArgs, TQueryFnData = Prisma.TikTokCustomerServiceMessageGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.TikTokCustomerServiceMessageFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('TikTokCustomerServiceMessage', `${endpoint}/tikTokCustomerServiceMessage/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueTikTokCustomerServiceMessage<TArgs extends Prisma.TikTokCustomerServiceMessageFindUniqueArgs, TQueryFnData = Prisma.TikTokCustomerServiceMessageGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.TikTokCustomerServiceMessageFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('TikTokCustomerServiceMessage', `${endpoint}/tikTokCustomerServiceMessage/findUnique`, args, options, fetch);
}

export function useFindFirstTikTokCustomerServiceMessage<TArgs extends Prisma.TikTokCustomerServiceMessageFindFirstArgs, TQueryFnData = Prisma.TikTokCustomerServiceMessageGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.TikTokCustomerServiceMessageFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('TikTokCustomerServiceMessage', `${endpoint}/tikTokCustomerServiceMessage/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstTikTokCustomerServiceMessage<TArgs extends Prisma.TikTokCustomerServiceMessageFindFirstArgs, TQueryFnData = Prisma.TikTokCustomerServiceMessageGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.TikTokCustomerServiceMessageFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('TikTokCustomerServiceMessage', `${endpoint}/tikTokCustomerServiceMessage/findFirst`, args, options, fetch);
}

export function useUpdateTikTokCustomerServiceMessage(options?: Omit<(UseMutationOptions<(TikTokCustomerServiceMessage | undefined), DefaultError, Prisma.TikTokCustomerServiceMessageUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TikTokCustomerServiceMessageUpdateArgs, DefaultError, TikTokCustomerServiceMessage, true>('TikTokCustomerServiceMessage', 'PUT', `${endpoint}/tikTokCustomerServiceMessage/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TikTokCustomerServiceMessageUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.TikTokCustomerServiceMessageUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, TikTokCustomerServiceMessage, Prisma.TikTokCustomerServiceMessageGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TikTokCustomerServiceMessageUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, TikTokCustomerServiceMessage, Prisma.TikTokCustomerServiceMessageGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyTikTokCustomerServiceMessage(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.TikTokCustomerServiceMessageUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TikTokCustomerServiceMessageUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('TikTokCustomerServiceMessage', 'PUT', `${endpoint}/tikTokCustomerServiceMessage/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TikTokCustomerServiceMessageUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TikTokCustomerServiceMessageUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.TikTokCustomerServiceMessageUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertTikTokCustomerServiceMessage(options?: Omit<(UseMutationOptions<(TikTokCustomerServiceMessage | undefined), DefaultError, Prisma.TikTokCustomerServiceMessageUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TikTokCustomerServiceMessageUpsertArgs, DefaultError, TikTokCustomerServiceMessage, true>('TikTokCustomerServiceMessage', 'POST', `${endpoint}/tikTokCustomerServiceMessage/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TikTokCustomerServiceMessageUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.TikTokCustomerServiceMessageUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, TikTokCustomerServiceMessage, Prisma.TikTokCustomerServiceMessageGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TikTokCustomerServiceMessageUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, TikTokCustomerServiceMessage, Prisma.TikTokCustomerServiceMessageGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteTikTokCustomerServiceMessage(options?: Omit<(UseMutationOptions<(TikTokCustomerServiceMessage | undefined), DefaultError, Prisma.TikTokCustomerServiceMessageDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TikTokCustomerServiceMessageDeleteArgs, DefaultError, TikTokCustomerServiceMessage, true>('TikTokCustomerServiceMessage', 'DELETE', `${endpoint}/tikTokCustomerServiceMessage/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TikTokCustomerServiceMessageDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.TikTokCustomerServiceMessageDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, TikTokCustomerServiceMessage, Prisma.TikTokCustomerServiceMessageGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TikTokCustomerServiceMessageDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, TikTokCustomerServiceMessage, Prisma.TikTokCustomerServiceMessageGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyTikTokCustomerServiceMessage(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.TikTokCustomerServiceMessageDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TikTokCustomerServiceMessageDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('TikTokCustomerServiceMessage', 'DELETE', `${endpoint}/tikTokCustomerServiceMessage/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TikTokCustomerServiceMessageDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TikTokCustomerServiceMessageDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.TikTokCustomerServiceMessageDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateTikTokCustomerServiceMessage<TArgs extends Prisma.TikTokCustomerServiceMessageAggregateArgs, TQueryFnData = Prisma.GetTikTokCustomerServiceMessageAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.TikTokCustomerServiceMessageAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('TikTokCustomerServiceMessage', `${endpoint}/tikTokCustomerServiceMessage/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateTikTokCustomerServiceMessage<TArgs extends Prisma.TikTokCustomerServiceMessageAggregateArgs, TQueryFnData = Prisma.GetTikTokCustomerServiceMessageAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.TikTokCustomerServiceMessageAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('TikTokCustomerServiceMessage', `${endpoint}/tikTokCustomerServiceMessage/aggregate`, args, options, fetch);
}

export function useGroupByTikTokCustomerServiceMessage<TArgs extends Prisma.TikTokCustomerServiceMessageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.TikTokCustomerServiceMessageGroupByArgs['orderBy'] } : { orderBy?: Prisma.TikTokCustomerServiceMessageGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.TikTokCustomerServiceMessageGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.TikTokCustomerServiceMessageGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.TikTokCustomerServiceMessageGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.TikTokCustomerServiceMessageGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.TikTokCustomerServiceMessageGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('TikTokCustomerServiceMessage', `${endpoint}/tikTokCustomerServiceMessage/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByTikTokCustomerServiceMessage<TArgs extends Prisma.TikTokCustomerServiceMessageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.TikTokCustomerServiceMessageGroupByArgs['orderBy'] } : { orderBy?: Prisma.TikTokCustomerServiceMessageGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.TikTokCustomerServiceMessageGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.TikTokCustomerServiceMessageGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.TikTokCustomerServiceMessageGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.TikTokCustomerServiceMessageGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.TikTokCustomerServiceMessageGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('TikTokCustomerServiceMessage', `${endpoint}/tikTokCustomerServiceMessage/groupBy`, args, options, fetch);
}

export function useCountTikTokCustomerServiceMessage<TArgs extends Prisma.TikTokCustomerServiceMessageCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.TikTokCustomerServiceMessageCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.TikTokCustomerServiceMessageCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('TikTokCustomerServiceMessage', `${endpoint}/tikTokCustomerServiceMessage/count`, args, options, fetch);
}

export function useSuspenseCountTikTokCustomerServiceMessage<TArgs extends Prisma.TikTokCustomerServiceMessageCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.TikTokCustomerServiceMessageCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.TikTokCustomerServiceMessageCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('TikTokCustomerServiceMessage', `${endpoint}/tikTokCustomerServiceMessage/count`, args, options, fetch);
}

export function useCheckTikTokCustomerServiceMessage<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; messageId?: string; customerServiceId?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('TikTokCustomerServiceMessage', `${endpoint}/tikTokCustomerServiceMessage/check`, args, options, fetch);
}
