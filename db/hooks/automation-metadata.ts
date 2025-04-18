/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, AutomationMetadata } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateAutomationMetadata(options?: Omit<(UseMutationOptions<(AutomationMetadata | undefined), DefaultError, Prisma.AutomationMetadataCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AutomationMetadataCreateArgs, DefaultError, AutomationMetadata, true>('AutomationMetadata', 'POST', `${endpoint}/automationMetadata/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.AutomationMetadataCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.AutomationMetadataCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, AutomationMetadata, Prisma.AutomationMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.AutomationMetadataCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, AutomationMetadata, Prisma.AutomationMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyAutomationMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.AutomationMetadataCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AutomationMetadataCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('AutomationMetadata', 'POST', `${endpoint}/automationMetadata/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.AutomationMetadataCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AutomationMetadataCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.AutomationMetadataCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyAutomationMetadata<TArgs extends Prisma.AutomationMetadataFindManyArgs, TQueryFnData = Array<Prisma.AutomationMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AutomationMetadataFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('AutomationMetadata', `${endpoint}/automationMetadata/findMany`, args, options, fetch);
}

export function useInfiniteFindManyAutomationMetadata<TArgs extends Prisma.AutomationMetadataFindManyArgs, TQueryFnData = Array<Prisma.AutomationMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AutomationMetadataFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('AutomationMetadata', `${endpoint}/automationMetadata/findMany`, args, options, fetch);
}

export function useSuspenseFindManyAutomationMetadata<TArgs extends Prisma.AutomationMetadataFindManyArgs, TQueryFnData = Array<Prisma.AutomationMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AutomationMetadataFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('AutomationMetadata', `${endpoint}/automationMetadata/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyAutomationMetadata<TArgs extends Prisma.AutomationMetadataFindManyArgs, TQueryFnData = Array<Prisma.AutomationMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AutomationMetadataFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('AutomationMetadata', `${endpoint}/automationMetadata/findMany`, args, options, fetch);
}

export function useFindUniqueAutomationMetadata<TArgs extends Prisma.AutomationMetadataFindUniqueArgs, TQueryFnData = Prisma.AutomationMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.AutomationMetadataFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('AutomationMetadata', `${endpoint}/automationMetadata/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueAutomationMetadata<TArgs extends Prisma.AutomationMetadataFindUniqueArgs, TQueryFnData = Prisma.AutomationMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.AutomationMetadataFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('AutomationMetadata', `${endpoint}/automationMetadata/findUnique`, args, options, fetch);
}

export function useFindFirstAutomationMetadata<TArgs extends Prisma.AutomationMetadataFindFirstArgs, TQueryFnData = Prisma.AutomationMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AutomationMetadataFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('AutomationMetadata', `${endpoint}/automationMetadata/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstAutomationMetadata<TArgs extends Prisma.AutomationMetadataFindFirstArgs, TQueryFnData = Prisma.AutomationMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AutomationMetadataFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('AutomationMetadata', `${endpoint}/automationMetadata/findFirst`, args, options, fetch);
}

export function useUpdateAutomationMetadata(options?: Omit<(UseMutationOptions<(AutomationMetadata | undefined), DefaultError, Prisma.AutomationMetadataUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AutomationMetadataUpdateArgs, DefaultError, AutomationMetadata, true>('AutomationMetadata', 'PUT', `${endpoint}/automationMetadata/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.AutomationMetadataUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.AutomationMetadataUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, AutomationMetadata, Prisma.AutomationMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.AutomationMetadataUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, AutomationMetadata, Prisma.AutomationMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyAutomationMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.AutomationMetadataUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AutomationMetadataUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('AutomationMetadata', 'PUT', `${endpoint}/automationMetadata/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.AutomationMetadataUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AutomationMetadataUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.AutomationMetadataUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertAutomationMetadata(options?: Omit<(UseMutationOptions<(AutomationMetadata | undefined), DefaultError, Prisma.AutomationMetadataUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AutomationMetadataUpsertArgs, DefaultError, AutomationMetadata, true>('AutomationMetadata', 'POST', `${endpoint}/automationMetadata/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.AutomationMetadataUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.AutomationMetadataUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, AutomationMetadata, Prisma.AutomationMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.AutomationMetadataUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, AutomationMetadata, Prisma.AutomationMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteAutomationMetadata(options?: Omit<(UseMutationOptions<(AutomationMetadata | undefined), DefaultError, Prisma.AutomationMetadataDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AutomationMetadataDeleteArgs, DefaultError, AutomationMetadata, true>('AutomationMetadata', 'DELETE', `${endpoint}/automationMetadata/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.AutomationMetadataDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.AutomationMetadataDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, AutomationMetadata, Prisma.AutomationMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.AutomationMetadataDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, AutomationMetadata, Prisma.AutomationMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyAutomationMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.AutomationMetadataDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AutomationMetadataDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('AutomationMetadata', 'DELETE', `${endpoint}/automationMetadata/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.AutomationMetadataDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AutomationMetadataDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.AutomationMetadataDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateAutomationMetadata<TArgs extends Prisma.AutomationMetadataAggregateArgs, TQueryFnData = Prisma.GetAutomationMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.AutomationMetadataAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('AutomationMetadata', `${endpoint}/automationMetadata/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateAutomationMetadata<TArgs extends Prisma.AutomationMetadataAggregateArgs, TQueryFnData = Prisma.GetAutomationMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.AutomationMetadataAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('AutomationMetadata', `${endpoint}/automationMetadata/aggregate`, args, options, fetch);
}

export function useGroupByAutomationMetadata<TArgs extends Prisma.AutomationMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.AutomationMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.AutomationMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.AutomationMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.AutomationMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.AutomationMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.AutomationMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.AutomationMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('AutomationMetadata', `${endpoint}/automationMetadata/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByAutomationMetadata<TArgs extends Prisma.AutomationMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.AutomationMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.AutomationMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.AutomationMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.AutomationMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.AutomationMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.AutomationMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.AutomationMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('AutomationMetadata', `${endpoint}/automationMetadata/groupBy`, args, options, fetch);
}

export function useCountAutomationMetadata<TArgs extends Prisma.AutomationMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.AutomationMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AutomationMetadataCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('AutomationMetadata', `${endpoint}/automationMetadata/count`, args, options, fetch);
}

export function useSuspenseCountAutomationMetadata<TArgs extends Prisma.AutomationMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.AutomationMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AutomationMetadataCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('AutomationMetadata', `${endpoint}/automationMetadata/count`, args, options, fetch);
}
import type { AutomationMode, AutomationResponseStatus } from '@prisma/client';

export function useCheckAutomationMetadata<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; mode?: AutomationMode; status?: AutomationResponseStatus; originalText?: string; editedText?: string; isEdited?: boolean; intentId?: string; commentId?: string; aiGeneratedMessageId?: string; sentMessageId?: string; workspaceId?: string; workspaceUserId?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('AutomationMetadata', `${endpoint}/automationMetadata/check`, args, options, fetch);
}
