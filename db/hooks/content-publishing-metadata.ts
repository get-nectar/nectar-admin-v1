/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, ContentPublishingMetadata } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateContentPublishingMetadata(options?: Omit<(UseMutationOptions<(ContentPublishingMetadata | undefined), DefaultError, Prisma.ContentPublishingMetadataCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ContentPublishingMetadataCreateArgs, DefaultError, ContentPublishingMetadata, true>('ContentPublishingMetadata', 'POST', `${endpoint}/contentPublishingMetadata/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ContentPublishingMetadataCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContentPublishingMetadataCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ContentPublishingMetadata, Prisma.ContentPublishingMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ContentPublishingMetadataCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ContentPublishingMetadata, Prisma.ContentPublishingMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyContentPublishingMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ContentPublishingMetadataCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ContentPublishingMetadataCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('ContentPublishingMetadata', 'POST', `${endpoint}/contentPublishingMetadata/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ContentPublishingMetadataCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContentPublishingMetadataCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ContentPublishingMetadataCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyContentPublishingMetadata<TArgs extends Prisma.ContentPublishingMetadataFindManyArgs, TQueryFnData = Array<Prisma.ContentPublishingMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentPublishingMetadataFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ContentPublishingMetadata', `${endpoint}/contentPublishingMetadata/findMany`, args, options, fetch);
}

export function useInfiniteFindManyContentPublishingMetadata<TArgs extends Prisma.ContentPublishingMetadataFindManyArgs, TQueryFnData = Array<Prisma.ContentPublishingMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentPublishingMetadataFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('ContentPublishingMetadata', `${endpoint}/contentPublishingMetadata/findMany`, args, options, fetch);
}

export function useSuspenseFindManyContentPublishingMetadata<TArgs extends Prisma.ContentPublishingMetadataFindManyArgs, TQueryFnData = Array<Prisma.ContentPublishingMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentPublishingMetadataFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ContentPublishingMetadata', `${endpoint}/contentPublishingMetadata/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyContentPublishingMetadata<TArgs extends Prisma.ContentPublishingMetadataFindManyArgs, TQueryFnData = Array<Prisma.ContentPublishingMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentPublishingMetadataFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('ContentPublishingMetadata', `${endpoint}/contentPublishingMetadata/findMany`, args, options, fetch);
}

export function useFindUniqueContentPublishingMetadata<TArgs extends Prisma.ContentPublishingMetadataFindUniqueArgs, TQueryFnData = Prisma.ContentPublishingMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ContentPublishingMetadataFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ContentPublishingMetadata', `${endpoint}/contentPublishingMetadata/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueContentPublishingMetadata<TArgs extends Prisma.ContentPublishingMetadataFindUniqueArgs, TQueryFnData = Prisma.ContentPublishingMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ContentPublishingMetadataFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ContentPublishingMetadata', `${endpoint}/contentPublishingMetadata/findUnique`, args, options, fetch);
}

export function useFindFirstContentPublishingMetadata<TArgs extends Prisma.ContentPublishingMetadataFindFirstArgs, TQueryFnData = Prisma.ContentPublishingMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentPublishingMetadataFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ContentPublishingMetadata', `${endpoint}/contentPublishingMetadata/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstContentPublishingMetadata<TArgs extends Prisma.ContentPublishingMetadataFindFirstArgs, TQueryFnData = Prisma.ContentPublishingMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentPublishingMetadataFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ContentPublishingMetadata', `${endpoint}/contentPublishingMetadata/findFirst`, args, options, fetch);
}

export function useUpdateContentPublishingMetadata(options?: Omit<(UseMutationOptions<(ContentPublishingMetadata | undefined), DefaultError, Prisma.ContentPublishingMetadataUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ContentPublishingMetadataUpdateArgs, DefaultError, ContentPublishingMetadata, true>('ContentPublishingMetadata', 'PUT', `${endpoint}/contentPublishingMetadata/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ContentPublishingMetadataUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContentPublishingMetadataUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ContentPublishingMetadata, Prisma.ContentPublishingMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ContentPublishingMetadataUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ContentPublishingMetadata, Prisma.ContentPublishingMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyContentPublishingMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ContentPublishingMetadataUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ContentPublishingMetadataUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('ContentPublishingMetadata', 'PUT', `${endpoint}/contentPublishingMetadata/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ContentPublishingMetadataUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContentPublishingMetadataUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ContentPublishingMetadataUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertContentPublishingMetadata(options?: Omit<(UseMutationOptions<(ContentPublishingMetadata | undefined), DefaultError, Prisma.ContentPublishingMetadataUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ContentPublishingMetadataUpsertArgs, DefaultError, ContentPublishingMetadata, true>('ContentPublishingMetadata', 'POST', `${endpoint}/contentPublishingMetadata/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ContentPublishingMetadataUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContentPublishingMetadataUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ContentPublishingMetadata, Prisma.ContentPublishingMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ContentPublishingMetadataUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ContentPublishingMetadata, Prisma.ContentPublishingMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteContentPublishingMetadata(options?: Omit<(UseMutationOptions<(ContentPublishingMetadata | undefined), DefaultError, Prisma.ContentPublishingMetadataDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ContentPublishingMetadataDeleteArgs, DefaultError, ContentPublishingMetadata, true>('ContentPublishingMetadata', 'DELETE', `${endpoint}/contentPublishingMetadata/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ContentPublishingMetadataDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContentPublishingMetadataDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ContentPublishingMetadata, Prisma.ContentPublishingMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ContentPublishingMetadataDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ContentPublishingMetadata, Prisma.ContentPublishingMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyContentPublishingMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ContentPublishingMetadataDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ContentPublishingMetadataDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('ContentPublishingMetadata', 'DELETE', `${endpoint}/contentPublishingMetadata/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ContentPublishingMetadataDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContentPublishingMetadataDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ContentPublishingMetadataDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateContentPublishingMetadata<TArgs extends Prisma.ContentPublishingMetadataAggregateArgs, TQueryFnData = Prisma.GetContentPublishingMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ContentPublishingMetadataAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ContentPublishingMetadata', `${endpoint}/contentPublishingMetadata/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateContentPublishingMetadata<TArgs extends Prisma.ContentPublishingMetadataAggregateArgs, TQueryFnData = Prisma.GetContentPublishingMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ContentPublishingMetadataAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ContentPublishingMetadata', `${endpoint}/contentPublishingMetadata/aggregate`, args, options, fetch);
}

export function useGroupByContentPublishingMetadata<TArgs extends Prisma.ContentPublishingMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ContentPublishingMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.ContentPublishingMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ContentPublishingMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ContentPublishingMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ContentPublishingMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ContentPublishingMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ContentPublishingMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ContentPublishingMetadata', `${endpoint}/contentPublishingMetadata/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByContentPublishingMetadata<TArgs extends Prisma.ContentPublishingMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ContentPublishingMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.ContentPublishingMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ContentPublishingMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ContentPublishingMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ContentPublishingMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ContentPublishingMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ContentPublishingMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ContentPublishingMetadata', `${endpoint}/contentPublishingMetadata/groupBy`, args, options, fetch);
}

export function useCountContentPublishingMetadata<TArgs extends Prisma.ContentPublishingMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ContentPublishingMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentPublishingMetadataCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ContentPublishingMetadata', `${endpoint}/contentPublishingMetadata/count`, args, options, fetch);
}

export function useSuspenseCountContentPublishingMetadata<TArgs extends Prisma.ContentPublishingMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ContentPublishingMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ContentPublishingMetadataCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ContentPublishingMetadata', `${endpoint}/contentPublishingMetadata/count`, args, options, fetch);
}
import type { ContentStatus } from '@prisma/client';

export function useCheckContentPublishingMetadata<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; contentId?: string; workspaceUserAuthorId?: string; instagramFirstComment?: string; status?: ContentStatus; containerId?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('ContentPublishingMetadata', `${endpoint}/contentPublishingMetadata/check`, args, options, fetch);
}
