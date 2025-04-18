/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, SuggestedIntentExample } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateSuggestedIntentExample(options?: Omit<(UseMutationOptions<(SuggestedIntentExample | undefined), DefaultError, Prisma.SuggestedIntentExampleCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SuggestedIntentExampleCreateArgs, DefaultError, SuggestedIntentExample, true>('SuggestedIntentExample', 'POST', `${endpoint}/suggestedIntentExample/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SuggestedIntentExampleCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SuggestedIntentExampleCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, SuggestedIntentExample, Prisma.SuggestedIntentExampleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SuggestedIntentExampleCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, SuggestedIntentExample, Prisma.SuggestedIntentExampleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManySuggestedIntentExample(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SuggestedIntentExampleCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SuggestedIntentExampleCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('SuggestedIntentExample', 'POST', `${endpoint}/suggestedIntentExample/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SuggestedIntentExampleCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SuggestedIntentExampleCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.SuggestedIntentExampleCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManySuggestedIntentExample<TArgs extends Prisma.SuggestedIntentExampleFindManyArgs, TQueryFnData = Array<Prisma.SuggestedIntentExampleGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SuggestedIntentExampleFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SuggestedIntentExample', `${endpoint}/suggestedIntentExample/findMany`, args, options, fetch);
}

export function useInfiniteFindManySuggestedIntentExample<TArgs extends Prisma.SuggestedIntentExampleFindManyArgs, TQueryFnData = Array<Prisma.SuggestedIntentExampleGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SuggestedIntentExampleFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('SuggestedIntentExample', `${endpoint}/suggestedIntentExample/findMany`, args, options, fetch);
}

export function useSuspenseFindManySuggestedIntentExample<TArgs extends Prisma.SuggestedIntentExampleFindManyArgs, TQueryFnData = Array<Prisma.SuggestedIntentExampleGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SuggestedIntentExampleFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('SuggestedIntentExample', `${endpoint}/suggestedIntentExample/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManySuggestedIntentExample<TArgs extends Prisma.SuggestedIntentExampleFindManyArgs, TQueryFnData = Array<Prisma.SuggestedIntentExampleGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SuggestedIntentExampleFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('SuggestedIntentExample', `${endpoint}/suggestedIntentExample/findMany`, args, options, fetch);
}

export function useFindUniqueSuggestedIntentExample<TArgs extends Prisma.SuggestedIntentExampleFindUniqueArgs, TQueryFnData = Prisma.SuggestedIntentExampleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SuggestedIntentExampleFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SuggestedIntentExample', `${endpoint}/suggestedIntentExample/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueSuggestedIntentExample<TArgs extends Prisma.SuggestedIntentExampleFindUniqueArgs, TQueryFnData = Prisma.SuggestedIntentExampleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SuggestedIntentExampleFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('SuggestedIntentExample', `${endpoint}/suggestedIntentExample/findUnique`, args, options, fetch);
}

export function useFindFirstSuggestedIntentExample<TArgs extends Prisma.SuggestedIntentExampleFindFirstArgs, TQueryFnData = Prisma.SuggestedIntentExampleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SuggestedIntentExampleFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SuggestedIntentExample', `${endpoint}/suggestedIntentExample/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstSuggestedIntentExample<TArgs extends Prisma.SuggestedIntentExampleFindFirstArgs, TQueryFnData = Prisma.SuggestedIntentExampleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SuggestedIntentExampleFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('SuggestedIntentExample', `${endpoint}/suggestedIntentExample/findFirst`, args, options, fetch);
}

export function useUpdateSuggestedIntentExample(options?: Omit<(UseMutationOptions<(SuggestedIntentExample | undefined), DefaultError, Prisma.SuggestedIntentExampleUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SuggestedIntentExampleUpdateArgs, DefaultError, SuggestedIntentExample, true>('SuggestedIntentExample', 'PUT', `${endpoint}/suggestedIntentExample/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SuggestedIntentExampleUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SuggestedIntentExampleUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, SuggestedIntentExample, Prisma.SuggestedIntentExampleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SuggestedIntentExampleUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, SuggestedIntentExample, Prisma.SuggestedIntentExampleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManySuggestedIntentExample(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SuggestedIntentExampleUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SuggestedIntentExampleUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('SuggestedIntentExample', 'PUT', `${endpoint}/suggestedIntentExample/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SuggestedIntentExampleUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SuggestedIntentExampleUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.SuggestedIntentExampleUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertSuggestedIntentExample(options?: Omit<(UseMutationOptions<(SuggestedIntentExample | undefined), DefaultError, Prisma.SuggestedIntentExampleUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SuggestedIntentExampleUpsertArgs, DefaultError, SuggestedIntentExample, true>('SuggestedIntentExample', 'POST', `${endpoint}/suggestedIntentExample/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SuggestedIntentExampleUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.SuggestedIntentExampleUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, SuggestedIntentExample, Prisma.SuggestedIntentExampleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SuggestedIntentExampleUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, SuggestedIntentExample, Prisma.SuggestedIntentExampleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteSuggestedIntentExample(options?: Omit<(UseMutationOptions<(SuggestedIntentExample | undefined), DefaultError, Prisma.SuggestedIntentExampleDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SuggestedIntentExampleDeleteArgs, DefaultError, SuggestedIntentExample, true>('SuggestedIntentExample', 'DELETE', `${endpoint}/suggestedIntentExample/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SuggestedIntentExampleDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.SuggestedIntentExampleDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, SuggestedIntentExample, Prisma.SuggestedIntentExampleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SuggestedIntentExampleDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, SuggestedIntentExample, Prisma.SuggestedIntentExampleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManySuggestedIntentExample(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SuggestedIntentExampleDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SuggestedIntentExampleDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('SuggestedIntentExample', 'DELETE', `${endpoint}/suggestedIntentExample/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SuggestedIntentExampleDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SuggestedIntentExampleDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.SuggestedIntentExampleDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateSuggestedIntentExample<TArgs extends Prisma.SuggestedIntentExampleAggregateArgs, TQueryFnData = Prisma.GetSuggestedIntentExampleAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SuggestedIntentExampleAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SuggestedIntentExample', `${endpoint}/suggestedIntentExample/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateSuggestedIntentExample<TArgs extends Prisma.SuggestedIntentExampleAggregateArgs, TQueryFnData = Prisma.GetSuggestedIntentExampleAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SuggestedIntentExampleAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('SuggestedIntentExample', `${endpoint}/suggestedIntentExample/aggregate`, args, options, fetch);
}

export function useGroupBySuggestedIntentExample<TArgs extends Prisma.SuggestedIntentExampleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.SuggestedIntentExampleGroupByArgs['orderBy'] } : { orderBy?: Prisma.SuggestedIntentExampleGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.SuggestedIntentExampleGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.SuggestedIntentExampleGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.SuggestedIntentExampleGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.SuggestedIntentExampleGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.SuggestedIntentExampleGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SuggestedIntentExample', `${endpoint}/suggestedIntentExample/groupBy`, args, options, fetch);
}

export function useSuspenseGroupBySuggestedIntentExample<TArgs extends Prisma.SuggestedIntentExampleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.SuggestedIntentExampleGroupByArgs['orderBy'] } : { orderBy?: Prisma.SuggestedIntentExampleGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.SuggestedIntentExampleGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.SuggestedIntentExampleGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.SuggestedIntentExampleGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.SuggestedIntentExampleGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.SuggestedIntentExampleGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('SuggestedIntentExample', `${endpoint}/suggestedIntentExample/groupBy`, args, options, fetch);
}

export function useCountSuggestedIntentExample<TArgs extends Prisma.SuggestedIntentExampleCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.SuggestedIntentExampleCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SuggestedIntentExampleCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SuggestedIntentExample', `${endpoint}/suggestedIntentExample/count`, args, options, fetch);
}

export function useSuspenseCountSuggestedIntentExample<TArgs extends Prisma.SuggestedIntentExampleCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.SuggestedIntentExampleCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SuggestedIntentExampleCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('SuggestedIntentExample', `${endpoint}/suggestedIntentExample/count`, args, options, fetch);
}

export function useCheckSuggestedIntentExample<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; body?: string; suggestionId?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('SuggestedIntentExample', `${endpoint}/suggestedIntentExample/check`, args, options, fetch);
}
