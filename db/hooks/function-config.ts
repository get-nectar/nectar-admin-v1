/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, FunctionConfig } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateFunctionConfig(options?: Omit<(UseMutationOptions<(FunctionConfig | undefined), DefaultError, Prisma.FunctionConfigCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.FunctionConfigCreateArgs, DefaultError, FunctionConfig, true>('FunctionConfig', 'POST', `${endpoint}/functionConfig/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.FunctionConfigCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.FunctionConfigCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, FunctionConfig, Prisma.FunctionConfigGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.FunctionConfigCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, FunctionConfig, Prisma.FunctionConfigGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyFunctionConfig(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.FunctionConfigCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.FunctionConfigCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('FunctionConfig', 'POST', `${endpoint}/functionConfig/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.FunctionConfigCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.FunctionConfigCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.FunctionConfigCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyFunctionConfig<TArgs extends Prisma.FunctionConfigFindManyArgs, TQueryFnData = Array<Prisma.FunctionConfigGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.FunctionConfigFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('FunctionConfig', `${endpoint}/functionConfig/findMany`, args, options, fetch);
}

export function useInfiniteFindManyFunctionConfig<TArgs extends Prisma.FunctionConfigFindManyArgs, TQueryFnData = Array<Prisma.FunctionConfigGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.FunctionConfigFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('FunctionConfig', `${endpoint}/functionConfig/findMany`, args, options, fetch);
}

export function useSuspenseFindManyFunctionConfig<TArgs extends Prisma.FunctionConfigFindManyArgs, TQueryFnData = Array<Prisma.FunctionConfigGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.FunctionConfigFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('FunctionConfig', `${endpoint}/functionConfig/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyFunctionConfig<TArgs extends Prisma.FunctionConfigFindManyArgs, TQueryFnData = Array<Prisma.FunctionConfigGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.FunctionConfigFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('FunctionConfig', `${endpoint}/functionConfig/findMany`, args, options, fetch);
}

export function useFindUniqueFunctionConfig<TArgs extends Prisma.FunctionConfigFindUniqueArgs, TQueryFnData = Prisma.FunctionConfigGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.FunctionConfigFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('FunctionConfig', `${endpoint}/functionConfig/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueFunctionConfig<TArgs extends Prisma.FunctionConfigFindUniqueArgs, TQueryFnData = Prisma.FunctionConfigGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.FunctionConfigFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('FunctionConfig', `${endpoint}/functionConfig/findUnique`, args, options, fetch);
}

export function useFindFirstFunctionConfig<TArgs extends Prisma.FunctionConfigFindFirstArgs, TQueryFnData = Prisma.FunctionConfigGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.FunctionConfigFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('FunctionConfig', `${endpoint}/functionConfig/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstFunctionConfig<TArgs extends Prisma.FunctionConfigFindFirstArgs, TQueryFnData = Prisma.FunctionConfigGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.FunctionConfigFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('FunctionConfig', `${endpoint}/functionConfig/findFirst`, args, options, fetch);
}

export function useUpdateFunctionConfig(options?: Omit<(UseMutationOptions<(FunctionConfig | undefined), DefaultError, Prisma.FunctionConfigUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.FunctionConfigUpdateArgs, DefaultError, FunctionConfig, true>('FunctionConfig', 'PUT', `${endpoint}/functionConfig/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.FunctionConfigUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.FunctionConfigUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, FunctionConfig, Prisma.FunctionConfigGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.FunctionConfigUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, FunctionConfig, Prisma.FunctionConfigGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyFunctionConfig(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.FunctionConfigUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.FunctionConfigUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('FunctionConfig', 'PUT', `${endpoint}/functionConfig/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.FunctionConfigUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.FunctionConfigUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.FunctionConfigUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertFunctionConfig(options?: Omit<(UseMutationOptions<(FunctionConfig | undefined), DefaultError, Prisma.FunctionConfigUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.FunctionConfigUpsertArgs, DefaultError, FunctionConfig, true>('FunctionConfig', 'POST', `${endpoint}/functionConfig/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.FunctionConfigUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.FunctionConfigUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, FunctionConfig, Prisma.FunctionConfigGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.FunctionConfigUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, FunctionConfig, Prisma.FunctionConfigGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteFunctionConfig(options?: Omit<(UseMutationOptions<(FunctionConfig | undefined), DefaultError, Prisma.FunctionConfigDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.FunctionConfigDeleteArgs, DefaultError, FunctionConfig, true>('FunctionConfig', 'DELETE', `${endpoint}/functionConfig/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.FunctionConfigDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.FunctionConfigDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, FunctionConfig, Prisma.FunctionConfigGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.FunctionConfigDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, FunctionConfig, Prisma.FunctionConfigGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyFunctionConfig(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.FunctionConfigDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.FunctionConfigDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('FunctionConfig', 'DELETE', `${endpoint}/functionConfig/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.FunctionConfigDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.FunctionConfigDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.FunctionConfigDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateFunctionConfig<TArgs extends Prisma.FunctionConfigAggregateArgs, TQueryFnData = Prisma.GetFunctionConfigAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.FunctionConfigAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('FunctionConfig', `${endpoint}/functionConfig/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateFunctionConfig<TArgs extends Prisma.FunctionConfigAggregateArgs, TQueryFnData = Prisma.GetFunctionConfigAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.FunctionConfigAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('FunctionConfig', `${endpoint}/functionConfig/aggregate`, args, options, fetch);
}

export function useGroupByFunctionConfig<TArgs extends Prisma.FunctionConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.FunctionConfigGroupByArgs['orderBy'] } : { orderBy?: Prisma.FunctionConfigGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.FunctionConfigGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.FunctionConfigGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.FunctionConfigGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.FunctionConfigGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.FunctionConfigGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('FunctionConfig', `${endpoint}/functionConfig/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByFunctionConfig<TArgs extends Prisma.FunctionConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.FunctionConfigGroupByArgs['orderBy'] } : { orderBy?: Prisma.FunctionConfigGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.FunctionConfigGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.FunctionConfigGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.FunctionConfigGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.FunctionConfigGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.FunctionConfigGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('FunctionConfig', `${endpoint}/functionConfig/groupBy`, args, options, fetch);
}

export function useCountFunctionConfig<TArgs extends Prisma.FunctionConfigCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.FunctionConfigCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.FunctionConfigCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('FunctionConfig', `${endpoint}/functionConfig/count`, args, options, fetch);
}

export function useSuspenseCountFunctionConfig<TArgs extends Prisma.FunctionConfigCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.FunctionConfigCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.FunctionConfigCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('FunctionConfig', `${endpoint}/functionConfig/count`, args, options, fetch);
}

export function useCheckFunctionConfig<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; name?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('FunctionConfig', `${endpoint}/functionConfig/check`, args, options, fetch);
}
