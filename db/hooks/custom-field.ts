/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, CustomField } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateCustomField(options?: Omit<(UseMutationOptions<(CustomField | undefined), DefaultError, Prisma.CustomFieldCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CustomFieldCreateArgs, DefaultError, CustomField, true>('CustomField', 'POST', `${endpoint}/customField/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CustomFieldCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CustomFieldCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CustomField, Prisma.CustomFieldGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CustomFieldCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CustomField, Prisma.CustomFieldGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyCustomField(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CustomFieldCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CustomFieldCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('CustomField', 'POST', `${endpoint}/customField/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CustomFieldCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CustomFieldCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CustomFieldCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyCustomField<TArgs extends Prisma.CustomFieldFindManyArgs, TQueryFnData = Array<Prisma.CustomFieldGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomFieldFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CustomField', `${endpoint}/customField/findMany`, args, options, fetch);
}

export function useInfiniteFindManyCustomField<TArgs extends Prisma.CustomFieldFindManyArgs, TQueryFnData = Array<Prisma.CustomFieldGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomFieldFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('CustomField', `${endpoint}/customField/findMany`, args, options, fetch);
}

export function useSuspenseFindManyCustomField<TArgs extends Prisma.CustomFieldFindManyArgs, TQueryFnData = Array<Prisma.CustomFieldGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomFieldFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CustomField', `${endpoint}/customField/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyCustomField<TArgs extends Prisma.CustomFieldFindManyArgs, TQueryFnData = Array<Prisma.CustomFieldGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomFieldFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('CustomField', `${endpoint}/customField/findMany`, args, options, fetch);
}

export function useFindUniqueCustomField<TArgs extends Prisma.CustomFieldFindUniqueArgs, TQueryFnData = Prisma.CustomFieldGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CustomFieldFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CustomField', `${endpoint}/customField/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueCustomField<TArgs extends Prisma.CustomFieldFindUniqueArgs, TQueryFnData = Prisma.CustomFieldGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CustomFieldFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CustomField', `${endpoint}/customField/findUnique`, args, options, fetch);
}

export function useFindFirstCustomField<TArgs extends Prisma.CustomFieldFindFirstArgs, TQueryFnData = Prisma.CustomFieldGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomFieldFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CustomField', `${endpoint}/customField/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstCustomField<TArgs extends Prisma.CustomFieldFindFirstArgs, TQueryFnData = Prisma.CustomFieldGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomFieldFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CustomField', `${endpoint}/customField/findFirst`, args, options, fetch);
}

export function useUpdateCustomField(options?: Omit<(UseMutationOptions<(CustomField | undefined), DefaultError, Prisma.CustomFieldUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CustomFieldUpdateArgs, DefaultError, CustomField, true>('CustomField', 'PUT', `${endpoint}/customField/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CustomFieldUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CustomFieldUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CustomField, Prisma.CustomFieldGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CustomFieldUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CustomField, Prisma.CustomFieldGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyCustomField(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CustomFieldUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CustomFieldUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('CustomField', 'PUT', `${endpoint}/customField/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CustomFieldUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CustomFieldUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CustomFieldUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertCustomField(options?: Omit<(UseMutationOptions<(CustomField | undefined), DefaultError, Prisma.CustomFieldUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CustomFieldUpsertArgs, DefaultError, CustomField, true>('CustomField', 'POST', `${endpoint}/customField/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CustomFieldUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.CustomFieldUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CustomField, Prisma.CustomFieldGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CustomFieldUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CustomField, Prisma.CustomFieldGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteCustomField(options?: Omit<(UseMutationOptions<(CustomField | undefined), DefaultError, Prisma.CustomFieldDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CustomFieldDeleteArgs, DefaultError, CustomField, true>('CustomField', 'DELETE', `${endpoint}/customField/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CustomFieldDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.CustomFieldDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CustomField, Prisma.CustomFieldGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CustomFieldDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CustomField, Prisma.CustomFieldGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyCustomField(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CustomFieldDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CustomFieldDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('CustomField', 'DELETE', `${endpoint}/customField/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CustomFieldDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CustomFieldDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CustomFieldDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateCustomField<TArgs extends Prisma.CustomFieldAggregateArgs, TQueryFnData = Prisma.GetCustomFieldAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CustomFieldAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CustomField', `${endpoint}/customField/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateCustomField<TArgs extends Prisma.CustomFieldAggregateArgs, TQueryFnData = Prisma.GetCustomFieldAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CustomFieldAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CustomField', `${endpoint}/customField/aggregate`, args, options, fetch);
}

export function useGroupByCustomField<TArgs extends Prisma.CustomFieldGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.CustomFieldGroupByArgs['orderBy'] } : { orderBy?: Prisma.CustomFieldGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.CustomFieldGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.CustomFieldGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.CustomFieldGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.CustomFieldGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.CustomFieldGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CustomField', `${endpoint}/customField/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByCustomField<TArgs extends Prisma.CustomFieldGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.CustomFieldGroupByArgs['orderBy'] } : { orderBy?: Prisma.CustomFieldGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.CustomFieldGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.CustomFieldGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.CustomFieldGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.CustomFieldGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.CustomFieldGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CustomField', `${endpoint}/customField/groupBy`, args, options, fetch);
}

export function useCountCustomField<TArgs extends Prisma.CustomFieldCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.CustomFieldCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomFieldCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CustomField', `${endpoint}/customField/count`, args, options, fetch);
}

export function useSuspenseCountCustomField<TArgs extends Prisma.CustomFieldCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.CustomFieldCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CustomFieldCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CustomField', `${endpoint}/customField/count`, args, options, fetch);
}
import type { CustomFieldType, CurrencyCode, CurrencyCodeStyle } from '@prisma/client';

export function useCheckCustomField<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; workspaceId?: string; title?: string; type?: CustomFieldType; options?: string; currencyCode?: CurrencyCode; currencyDisplayStyle?: CurrencyCodeStyle; valueSaveInstructions?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('CustomField', `${endpoint}/customField/check`, args, options, fetch);
}
