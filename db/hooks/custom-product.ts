/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, CustomProduct } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateCustomProduct(options?: Omit<(UseMutationOptions<(CustomProduct | undefined), DefaultError, Prisma.CustomProductCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CustomProductCreateArgs, DefaultError, CustomProduct, true>('CustomProduct', 'POST', `${endpoint}/customProduct/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CustomProductCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CustomProductCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CustomProduct, Prisma.CustomProductGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CustomProductCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CustomProduct, Prisma.CustomProductGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyCustomProduct(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CustomProductCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CustomProductCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('CustomProduct', 'POST', `${endpoint}/customProduct/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CustomProductCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CustomProductCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CustomProductCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyCustomProduct<TArgs extends Prisma.CustomProductFindManyArgs, TQueryFnData = Array<Prisma.CustomProductGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomProductFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CustomProduct', `${endpoint}/customProduct/findMany`, args, options, fetch);
}

export function useInfiniteFindManyCustomProduct<TArgs extends Prisma.CustomProductFindManyArgs, TQueryFnData = Array<Prisma.CustomProductGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomProductFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('CustomProduct', `${endpoint}/customProduct/findMany`, args, options, fetch);
}

export function useSuspenseFindManyCustomProduct<TArgs extends Prisma.CustomProductFindManyArgs, TQueryFnData = Array<Prisma.CustomProductGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomProductFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CustomProduct', `${endpoint}/customProduct/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyCustomProduct<TArgs extends Prisma.CustomProductFindManyArgs, TQueryFnData = Array<Prisma.CustomProductGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomProductFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('CustomProduct', `${endpoint}/customProduct/findMany`, args, options, fetch);
}

export function useFindUniqueCustomProduct<TArgs extends Prisma.CustomProductFindUniqueArgs, TQueryFnData = Prisma.CustomProductGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CustomProductFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CustomProduct', `${endpoint}/customProduct/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueCustomProduct<TArgs extends Prisma.CustomProductFindUniqueArgs, TQueryFnData = Prisma.CustomProductGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CustomProductFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CustomProduct', `${endpoint}/customProduct/findUnique`, args, options, fetch);
}

export function useFindFirstCustomProduct<TArgs extends Prisma.CustomProductFindFirstArgs, TQueryFnData = Prisma.CustomProductGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomProductFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CustomProduct', `${endpoint}/customProduct/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstCustomProduct<TArgs extends Prisma.CustomProductFindFirstArgs, TQueryFnData = Prisma.CustomProductGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomProductFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CustomProduct', `${endpoint}/customProduct/findFirst`, args, options, fetch);
}

export function useUpdateCustomProduct(options?: Omit<(UseMutationOptions<(CustomProduct | undefined), DefaultError, Prisma.CustomProductUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CustomProductUpdateArgs, DefaultError, CustomProduct, true>('CustomProduct', 'PUT', `${endpoint}/customProduct/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CustomProductUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CustomProductUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CustomProduct, Prisma.CustomProductGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CustomProductUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CustomProduct, Prisma.CustomProductGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyCustomProduct(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CustomProductUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CustomProductUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('CustomProduct', 'PUT', `${endpoint}/customProduct/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CustomProductUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CustomProductUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CustomProductUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertCustomProduct(options?: Omit<(UseMutationOptions<(CustomProduct | undefined), DefaultError, Prisma.CustomProductUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CustomProductUpsertArgs, DefaultError, CustomProduct, true>('CustomProduct', 'POST', `${endpoint}/customProduct/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CustomProductUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.CustomProductUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CustomProduct, Prisma.CustomProductGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CustomProductUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CustomProduct, Prisma.CustomProductGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteCustomProduct(options?: Omit<(UseMutationOptions<(CustomProduct | undefined), DefaultError, Prisma.CustomProductDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CustomProductDeleteArgs, DefaultError, CustomProduct, true>('CustomProduct', 'DELETE', `${endpoint}/customProduct/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CustomProductDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.CustomProductDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CustomProduct, Prisma.CustomProductGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CustomProductDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CustomProduct, Prisma.CustomProductGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyCustomProduct(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CustomProductDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CustomProductDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('CustomProduct', 'DELETE', `${endpoint}/customProduct/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CustomProductDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CustomProductDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CustomProductDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateCustomProduct<TArgs extends Prisma.CustomProductAggregateArgs, TQueryFnData = Prisma.GetCustomProductAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CustomProductAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CustomProduct', `${endpoint}/customProduct/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateCustomProduct<TArgs extends Prisma.CustomProductAggregateArgs, TQueryFnData = Prisma.GetCustomProductAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CustomProductAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CustomProduct', `${endpoint}/customProduct/aggregate`, args, options, fetch);
}

export function useGroupByCustomProduct<TArgs extends Prisma.CustomProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.CustomProductGroupByArgs['orderBy'] } : { orderBy?: Prisma.CustomProductGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.CustomProductGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.CustomProductGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.CustomProductGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.CustomProductGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.CustomProductGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CustomProduct', `${endpoint}/customProduct/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByCustomProduct<TArgs extends Prisma.CustomProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.CustomProductGroupByArgs['orderBy'] } : { orderBy?: Prisma.CustomProductGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.CustomProductGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.CustomProductGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.CustomProductGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.CustomProductGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.CustomProductGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CustomProduct', `${endpoint}/customProduct/groupBy`, args, options, fetch);
}

export function useCountCustomProduct<TArgs extends Prisma.CustomProductCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.CustomProductCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomProductCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CustomProduct', `${endpoint}/customProduct/count`, args, options, fetch);
}

export function useSuspenseCountCustomProduct<TArgs extends Prisma.CustomProductCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.CustomProductCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomProductCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CustomProduct', `${endpoint}/customProduct/count`, args, options, fetch);
}
import type { KnowledgeResourceType, UploadStatus } from '@prisma/client';

export function useCheckCustomProduct<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; title?: string; type?: KnowledgeResourceType; status?: UploadStatus; customNotes?: string; knowledgeBaseId?: string; workspaceId?: string; description?: string; url?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('CustomProduct', `${endpoint}/customProduct/check`, args, options, fetch);
}
