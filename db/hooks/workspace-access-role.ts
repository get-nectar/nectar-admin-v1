/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, WorkspaceAccessRole } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateWorkspaceAccessRole(options?: Omit<(UseMutationOptions<(WorkspaceAccessRole | undefined), DefaultError, Prisma.WorkspaceAccessRoleCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WorkspaceAccessRoleCreateArgs, DefaultError, WorkspaceAccessRole, true>('WorkspaceAccessRole', 'POST', `${endpoint}/workspaceAccessRole/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WorkspaceAccessRoleCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkspaceAccessRoleCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, WorkspaceAccessRole, Prisma.WorkspaceAccessRoleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WorkspaceAccessRoleCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, WorkspaceAccessRole, Prisma.WorkspaceAccessRoleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyWorkspaceAccessRole(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.WorkspaceAccessRoleCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WorkspaceAccessRoleCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('WorkspaceAccessRole', 'POST', `${endpoint}/workspaceAccessRole/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WorkspaceAccessRoleCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkspaceAccessRoleCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.WorkspaceAccessRoleCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyWorkspaceAccessRole<TArgs extends Prisma.WorkspaceAccessRoleFindManyArgs, TQueryFnData = Array<Prisma.WorkspaceAccessRoleGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WorkspaceAccessRoleFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('WorkspaceAccessRole', `${endpoint}/workspaceAccessRole/findMany`, args, options, fetch);
}

export function useInfiniteFindManyWorkspaceAccessRole<TArgs extends Prisma.WorkspaceAccessRoleFindManyArgs, TQueryFnData = Array<Prisma.WorkspaceAccessRoleGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WorkspaceAccessRoleFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('WorkspaceAccessRole', `${endpoint}/workspaceAccessRole/findMany`, args, options, fetch);
}

export function useSuspenseFindManyWorkspaceAccessRole<TArgs extends Prisma.WorkspaceAccessRoleFindManyArgs, TQueryFnData = Array<Prisma.WorkspaceAccessRoleGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WorkspaceAccessRoleFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('WorkspaceAccessRole', `${endpoint}/workspaceAccessRole/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyWorkspaceAccessRole<TArgs extends Prisma.WorkspaceAccessRoleFindManyArgs, TQueryFnData = Array<Prisma.WorkspaceAccessRoleGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WorkspaceAccessRoleFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('WorkspaceAccessRole', `${endpoint}/workspaceAccessRole/findMany`, args, options, fetch);
}

export function useFindUniqueWorkspaceAccessRole<TArgs extends Prisma.WorkspaceAccessRoleFindUniqueArgs, TQueryFnData = Prisma.WorkspaceAccessRoleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.WorkspaceAccessRoleFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('WorkspaceAccessRole', `${endpoint}/workspaceAccessRole/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueWorkspaceAccessRole<TArgs extends Prisma.WorkspaceAccessRoleFindUniqueArgs, TQueryFnData = Prisma.WorkspaceAccessRoleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.WorkspaceAccessRoleFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('WorkspaceAccessRole', `${endpoint}/workspaceAccessRole/findUnique`, args, options, fetch);
}

export function useFindFirstWorkspaceAccessRole<TArgs extends Prisma.WorkspaceAccessRoleFindFirstArgs, TQueryFnData = Prisma.WorkspaceAccessRoleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WorkspaceAccessRoleFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('WorkspaceAccessRole', `${endpoint}/workspaceAccessRole/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstWorkspaceAccessRole<TArgs extends Prisma.WorkspaceAccessRoleFindFirstArgs, TQueryFnData = Prisma.WorkspaceAccessRoleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WorkspaceAccessRoleFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('WorkspaceAccessRole', `${endpoint}/workspaceAccessRole/findFirst`, args, options, fetch);
}

export function useUpdateWorkspaceAccessRole(options?: Omit<(UseMutationOptions<(WorkspaceAccessRole | undefined), DefaultError, Prisma.WorkspaceAccessRoleUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WorkspaceAccessRoleUpdateArgs, DefaultError, WorkspaceAccessRole, true>('WorkspaceAccessRole', 'PUT', `${endpoint}/workspaceAccessRole/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WorkspaceAccessRoleUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkspaceAccessRoleUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, WorkspaceAccessRole, Prisma.WorkspaceAccessRoleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WorkspaceAccessRoleUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, WorkspaceAccessRole, Prisma.WorkspaceAccessRoleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyWorkspaceAccessRole(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.WorkspaceAccessRoleUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WorkspaceAccessRoleUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('WorkspaceAccessRole', 'PUT', `${endpoint}/workspaceAccessRole/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WorkspaceAccessRoleUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkspaceAccessRoleUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.WorkspaceAccessRoleUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertWorkspaceAccessRole(options?: Omit<(UseMutationOptions<(WorkspaceAccessRole | undefined), DefaultError, Prisma.WorkspaceAccessRoleUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WorkspaceAccessRoleUpsertArgs, DefaultError, WorkspaceAccessRole, true>('WorkspaceAccessRole', 'POST', `${endpoint}/workspaceAccessRole/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WorkspaceAccessRoleUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkspaceAccessRoleUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, WorkspaceAccessRole, Prisma.WorkspaceAccessRoleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WorkspaceAccessRoleUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, WorkspaceAccessRole, Prisma.WorkspaceAccessRoleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteWorkspaceAccessRole(options?: Omit<(UseMutationOptions<(WorkspaceAccessRole | undefined), DefaultError, Prisma.WorkspaceAccessRoleDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WorkspaceAccessRoleDeleteArgs, DefaultError, WorkspaceAccessRole, true>('WorkspaceAccessRole', 'DELETE', `${endpoint}/workspaceAccessRole/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WorkspaceAccessRoleDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkspaceAccessRoleDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, WorkspaceAccessRole, Prisma.WorkspaceAccessRoleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WorkspaceAccessRoleDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, WorkspaceAccessRole, Prisma.WorkspaceAccessRoleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyWorkspaceAccessRole(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.WorkspaceAccessRoleDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WorkspaceAccessRoleDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('WorkspaceAccessRole', 'DELETE', `${endpoint}/workspaceAccessRole/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WorkspaceAccessRoleDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkspaceAccessRoleDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.WorkspaceAccessRoleDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateWorkspaceAccessRole<TArgs extends Prisma.WorkspaceAccessRoleAggregateArgs, TQueryFnData = Prisma.GetWorkspaceAccessRoleAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.WorkspaceAccessRoleAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('WorkspaceAccessRole', `${endpoint}/workspaceAccessRole/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateWorkspaceAccessRole<TArgs extends Prisma.WorkspaceAccessRoleAggregateArgs, TQueryFnData = Prisma.GetWorkspaceAccessRoleAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.WorkspaceAccessRoleAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('WorkspaceAccessRole', `${endpoint}/workspaceAccessRole/aggregate`, args, options, fetch);
}

export function useGroupByWorkspaceAccessRole<TArgs extends Prisma.WorkspaceAccessRoleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.WorkspaceAccessRoleGroupByArgs['orderBy'] } : { orderBy?: Prisma.WorkspaceAccessRoleGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.WorkspaceAccessRoleGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.WorkspaceAccessRoleGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.WorkspaceAccessRoleGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.WorkspaceAccessRoleGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.WorkspaceAccessRoleGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('WorkspaceAccessRole', `${endpoint}/workspaceAccessRole/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByWorkspaceAccessRole<TArgs extends Prisma.WorkspaceAccessRoleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.WorkspaceAccessRoleGroupByArgs['orderBy'] } : { orderBy?: Prisma.WorkspaceAccessRoleGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.WorkspaceAccessRoleGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.WorkspaceAccessRoleGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.WorkspaceAccessRoleGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.WorkspaceAccessRoleGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.WorkspaceAccessRoleGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('WorkspaceAccessRole', `${endpoint}/workspaceAccessRole/groupBy`, args, options, fetch);
}

export function useCountWorkspaceAccessRole<TArgs extends Prisma.WorkspaceAccessRoleCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.WorkspaceAccessRoleCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WorkspaceAccessRoleCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('WorkspaceAccessRole', `${endpoint}/workspaceAccessRole/count`, args, options, fetch);
}

export function useSuspenseCountWorkspaceAccessRole<TArgs extends Prisma.WorkspaceAccessRoleCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.WorkspaceAccessRoleCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WorkspaceAccessRoleCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('WorkspaceAccessRole', `${endpoint}/workspaceAccessRole/count`, args, options, fetch);
}

export function useCheckWorkspaceAccessRole<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; name?: string; description?: string; workspaceId?: string; isDefault?: boolean }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('WorkspaceAccessRole', `${endpoint}/workspaceAccessRole/check`, args, options, fetch);
}
