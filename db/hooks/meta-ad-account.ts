/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, MetaAdAccount } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateMetaAdAccount(options?: Omit<(UseMutationOptions<(MetaAdAccount | undefined), DefaultError, Prisma.MetaAdAccountCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.MetaAdAccountCreateArgs, DefaultError, MetaAdAccount, true>('MetaAdAccount', 'POST', `${endpoint}/metaAdAccount/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.MetaAdAccountCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.MetaAdAccountCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, MetaAdAccount, Prisma.MetaAdAccountGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.MetaAdAccountCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, MetaAdAccount, Prisma.MetaAdAccountGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyMetaAdAccount(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.MetaAdAccountCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.MetaAdAccountCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('MetaAdAccount', 'POST', `${endpoint}/metaAdAccount/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.MetaAdAccountCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.MetaAdAccountCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.MetaAdAccountCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyMetaAdAccount<TArgs extends Prisma.MetaAdAccountFindManyArgs, TQueryFnData = Array<Prisma.MetaAdAccountGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.MetaAdAccountFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('MetaAdAccount', `${endpoint}/metaAdAccount/findMany`, args, options, fetch);
}

export function useInfiniteFindManyMetaAdAccount<TArgs extends Prisma.MetaAdAccountFindManyArgs, TQueryFnData = Array<Prisma.MetaAdAccountGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.MetaAdAccountFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('MetaAdAccount', `${endpoint}/metaAdAccount/findMany`, args, options, fetch);
}

export function useSuspenseFindManyMetaAdAccount<TArgs extends Prisma.MetaAdAccountFindManyArgs, TQueryFnData = Array<Prisma.MetaAdAccountGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.MetaAdAccountFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('MetaAdAccount', `${endpoint}/metaAdAccount/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyMetaAdAccount<TArgs extends Prisma.MetaAdAccountFindManyArgs, TQueryFnData = Array<Prisma.MetaAdAccountGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.MetaAdAccountFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('MetaAdAccount', `${endpoint}/metaAdAccount/findMany`, args, options, fetch);
}

export function useFindUniqueMetaAdAccount<TArgs extends Prisma.MetaAdAccountFindUniqueArgs, TQueryFnData = Prisma.MetaAdAccountGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.MetaAdAccountFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('MetaAdAccount', `${endpoint}/metaAdAccount/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueMetaAdAccount<TArgs extends Prisma.MetaAdAccountFindUniqueArgs, TQueryFnData = Prisma.MetaAdAccountGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.MetaAdAccountFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('MetaAdAccount', `${endpoint}/metaAdAccount/findUnique`, args, options, fetch);
}

export function useFindFirstMetaAdAccount<TArgs extends Prisma.MetaAdAccountFindFirstArgs, TQueryFnData = Prisma.MetaAdAccountGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.MetaAdAccountFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('MetaAdAccount', `${endpoint}/metaAdAccount/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstMetaAdAccount<TArgs extends Prisma.MetaAdAccountFindFirstArgs, TQueryFnData = Prisma.MetaAdAccountGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.MetaAdAccountFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('MetaAdAccount', `${endpoint}/metaAdAccount/findFirst`, args, options, fetch);
}

export function useUpdateMetaAdAccount(options?: Omit<(UseMutationOptions<(MetaAdAccount | undefined), DefaultError, Prisma.MetaAdAccountUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.MetaAdAccountUpdateArgs, DefaultError, MetaAdAccount, true>('MetaAdAccount', 'PUT', `${endpoint}/metaAdAccount/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.MetaAdAccountUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.MetaAdAccountUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, MetaAdAccount, Prisma.MetaAdAccountGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.MetaAdAccountUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, MetaAdAccount, Prisma.MetaAdAccountGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyMetaAdAccount(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.MetaAdAccountUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.MetaAdAccountUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('MetaAdAccount', 'PUT', `${endpoint}/metaAdAccount/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.MetaAdAccountUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.MetaAdAccountUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.MetaAdAccountUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertMetaAdAccount(options?: Omit<(UseMutationOptions<(MetaAdAccount | undefined), DefaultError, Prisma.MetaAdAccountUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.MetaAdAccountUpsertArgs, DefaultError, MetaAdAccount, true>('MetaAdAccount', 'POST', `${endpoint}/metaAdAccount/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.MetaAdAccountUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.MetaAdAccountUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, MetaAdAccount, Prisma.MetaAdAccountGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.MetaAdAccountUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, MetaAdAccount, Prisma.MetaAdAccountGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteMetaAdAccount(options?: Omit<(UseMutationOptions<(MetaAdAccount | undefined), DefaultError, Prisma.MetaAdAccountDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.MetaAdAccountDeleteArgs, DefaultError, MetaAdAccount, true>('MetaAdAccount', 'DELETE', `${endpoint}/metaAdAccount/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.MetaAdAccountDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.MetaAdAccountDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, MetaAdAccount, Prisma.MetaAdAccountGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.MetaAdAccountDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, MetaAdAccount, Prisma.MetaAdAccountGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyMetaAdAccount(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.MetaAdAccountDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.MetaAdAccountDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('MetaAdAccount', 'DELETE', `${endpoint}/metaAdAccount/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.MetaAdAccountDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.MetaAdAccountDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.MetaAdAccountDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateMetaAdAccount<TArgs extends Prisma.MetaAdAccountAggregateArgs, TQueryFnData = Prisma.GetMetaAdAccountAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.MetaAdAccountAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('MetaAdAccount', `${endpoint}/metaAdAccount/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateMetaAdAccount<TArgs extends Prisma.MetaAdAccountAggregateArgs, TQueryFnData = Prisma.GetMetaAdAccountAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.MetaAdAccountAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('MetaAdAccount', `${endpoint}/metaAdAccount/aggregate`, args, options, fetch);
}

export function useGroupByMetaAdAccount<TArgs extends Prisma.MetaAdAccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.MetaAdAccountGroupByArgs['orderBy'] } : { orderBy?: Prisma.MetaAdAccountGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.MetaAdAccountGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.MetaAdAccountGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.MetaAdAccountGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.MetaAdAccountGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.MetaAdAccountGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('MetaAdAccount', `${endpoint}/metaAdAccount/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByMetaAdAccount<TArgs extends Prisma.MetaAdAccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.MetaAdAccountGroupByArgs['orderBy'] } : { orderBy?: Prisma.MetaAdAccountGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.MetaAdAccountGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.MetaAdAccountGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.MetaAdAccountGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.MetaAdAccountGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.MetaAdAccountGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('MetaAdAccount', `${endpoint}/metaAdAccount/groupBy`, args, options, fetch);
}

export function useCountMetaAdAccount<TArgs extends Prisma.MetaAdAccountCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.MetaAdAccountCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.MetaAdAccountCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('MetaAdAccount', `${endpoint}/metaAdAccount/count`, args, options, fetch);
}

export function useSuspenseCountMetaAdAccount<TArgs extends Prisma.MetaAdAccountCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.MetaAdAccountCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.MetaAdAccountCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('MetaAdAccount', `${endpoint}/metaAdAccount/count`, args, options, fetch);
}

export function useCheckMetaAdAccount<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; workspaceId?: string; isReauthRequired?: boolean; accountId?: string; adAccountId?: string; businessName?: string; name?: string; ownerId?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('MetaAdAccount', `${endpoint}/metaAdAccount/check`, args, options, fetch);
}
