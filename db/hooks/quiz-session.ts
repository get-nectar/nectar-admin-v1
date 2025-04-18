/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, QuizSession } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateQuizSession(options?: Omit<(UseMutationOptions<(QuizSession | undefined), DefaultError, Prisma.QuizSessionCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.QuizSessionCreateArgs, DefaultError, QuizSession, true>('QuizSession', 'POST', `${endpoint}/quizSession/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.QuizSessionCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.QuizSessionCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, QuizSession, Prisma.QuizSessionGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.QuizSessionCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, QuizSession, Prisma.QuizSessionGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyQuizSession(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.QuizSessionCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.QuizSessionCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('QuizSession', 'POST', `${endpoint}/quizSession/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.QuizSessionCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.QuizSessionCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.QuizSessionCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyQuizSession<TArgs extends Prisma.QuizSessionFindManyArgs, TQueryFnData = Array<Prisma.QuizSessionGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.QuizSessionFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('QuizSession', `${endpoint}/quizSession/findMany`, args, options, fetch);
}

export function useInfiniteFindManyQuizSession<TArgs extends Prisma.QuizSessionFindManyArgs, TQueryFnData = Array<Prisma.QuizSessionGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.QuizSessionFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('QuizSession', `${endpoint}/quizSession/findMany`, args, options, fetch);
}

export function useSuspenseFindManyQuizSession<TArgs extends Prisma.QuizSessionFindManyArgs, TQueryFnData = Array<Prisma.QuizSessionGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.QuizSessionFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('QuizSession', `${endpoint}/quizSession/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyQuizSession<TArgs extends Prisma.QuizSessionFindManyArgs, TQueryFnData = Array<Prisma.QuizSessionGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.QuizSessionFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('QuizSession', `${endpoint}/quizSession/findMany`, args, options, fetch);
}

export function useFindUniqueQuizSession<TArgs extends Prisma.QuizSessionFindUniqueArgs, TQueryFnData = Prisma.QuizSessionGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.QuizSessionFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('QuizSession', `${endpoint}/quizSession/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueQuizSession<TArgs extends Prisma.QuizSessionFindUniqueArgs, TQueryFnData = Prisma.QuizSessionGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.QuizSessionFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('QuizSession', `${endpoint}/quizSession/findUnique`, args, options, fetch);
}

export function useFindFirstQuizSession<TArgs extends Prisma.QuizSessionFindFirstArgs, TQueryFnData = Prisma.QuizSessionGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.QuizSessionFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('QuizSession', `${endpoint}/quizSession/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstQuizSession<TArgs extends Prisma.QuizSessionFindFirstArgs, TQueryFnData = Prisma.QuizSessionGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.QuizSessionFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('QuizSession', `${endpoint}/quizSession/findFirst`, args, options, fetch);
}

export function useUpdateQuizSession(options?: Omit<(UseMutationOptions<(QuizSession | undefined), DefaultError, Prisma.QuizSessionUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.QuizSessionUpdateArgs, DefaultError, QuizSession, true>('QuizSession', 'PUT', `${endpoint}/quizSession/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.QuizSessionUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.QuizSessionUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, QuizSession, Prisma.QuizSessionGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.QuizSessionUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, QuizSession, Prisma.QuizSessionGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyQuizSession(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.QuizSessionUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.QuizSessionUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('QuizSession', 'PUT', `${endpoint}/quizSession/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.QuizSessionUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.QuizSessionUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.QuizSessionUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertQuizSession(options?: Omit<(UseMutationOptions<(QuizSession | undefined), DefaultError, Prisma.QuizSessionUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.QuizSessionUpsertArgs, DefaultError, QuizSession, true>('QuizSession', 'POST', `${endpoint}/quizSession/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.QuizSessionUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.QuizSessionUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, QuizSession, Prisma.QuizSessionGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.QuizSessionUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, QuizSession, Prisma.QuizSessionGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteQuizSession(options?: Omit<(UseMutationOptions<(QuizSession | undefined), DefaultError, Prisma.QuizSessionDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.QuizSessionDeleteArgs, DefaultError, QuizSession, true>('QuizSession', 'DELETE', `${endpoint}/quizSession/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.QuizSessionDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.QuizSessionDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, QuizSession, Prisma.QuizSessionGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.QuizSessionDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, QuizSession, Prisma.QuizSessionGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyQuizSession(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.QuizSessionDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.QuizSessionDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('QuizSession', 'DELETE', `${endpoint}/quizSession/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.QuizSessionDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.QuizSessionDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.QuizSessionDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateQuizSession<TArgs extends Prisma.QuizSessionAggregateArgs, TQueryFnData = Prisma.GetQuizSessionAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.QuizSessionAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('QuizSession', `${endpoint}/quizSession/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateQuizSession<TArgs extends Prisma.QuizSessionAggregateArgs, TQueryFnData = Prisma.GetQuizSessionAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.QuizSessionAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('QuizSession', `${endpoint}/quizSession/aggregate`, args, options, fetch);
}

export function useGroupByQuizSession<TArgs extends Prisma.QuizSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.QuizSessionGroupByArgs['orderBy'] } : { orderBy?: Prisma.QuizSessionGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.QuizSessionGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.QuizSessionGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.QuizSessionGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.QuizSessionGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.QuizSessionGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('QuizSession', `${endpoint}/quizSession/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByQuizSession<TArgs extends Prisma.QuizSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.QuizSessionGroupByArgs['orderBy'] } : { orderBy?: Prisma.QuizSessionGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.QuizSessionGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.QuizSessionGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.QuizSessionGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.QuizSessionGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.QuizSessionGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('QuizSession', `${endpoint}/quizSession/groupBy`, args, options, fetch);
}

export function useCountQuizSession<TArgs extends Prisma.QuizSessionCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.QuizSessionCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.QuizSessionCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('QuizSession', `${endpoint}/quizSession/count`, args, options, fetch);
}

export function useSuspenseCountQuizSession<TArgs extends Prisma.QuizSessionCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.QuizSessionCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.QuizSessionCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('QuizSession', `${endpoint}/quizSession/count`, args, options, fetch);
}
import type { QuizSessionStatus, QuizMessageState, QuizReminderStatus } from '@prisma/client';

export function useCheckQuizSession<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; askedQuestionIds?: string; lastQuestionAskedId?: string; status?: QuizSessionStatus; currentMessageState?: QuizMessageState; reminderStatus?: QuizReminderStatus; journeyId?: string; journeySessionId?: string; conversationId?: string; communityMemberId?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('QuizSession', `${endpoint}/quizSession/check`, args, options, fetch);
}
