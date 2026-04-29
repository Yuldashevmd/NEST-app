import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    password: string | null;
    email: string | null;
    createdAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    password: string | null;
    email: string | null;
    createdAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    password: number;
    email: number;
    createdAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    password?: true;
    email?: true;
    createdAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    password?: true;
    email?: true;
    createdAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    password?: true;
    email?: true;
    createdAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    name: string;
    password: string;
    email: string;
    createdAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    name?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    classes?: Prisma.UserClassListRelationFilter;
    posts?: Prisma.PostListRelationFilter;
    profile?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    classes?: Prisma.UserClassOrderByRelationAggregateInput;
    posts?: Prisma.PostOrderByRelationAggregateInput;
    profile?: Prisma.ProfileOrderByWithRelationInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    classes?: Prisma.UserClassListRelationFilter;
    posts?: Prisma.PostListRelationFilter;
    profile?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    name: string;
    password?: string;
    email: string;
    createdAt?: Date | string;
    classes?: Prisma.UserClassCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    name: string;
    password?: string;
    email: string;
    createdAt?: Date | string;
    classes?: Prisma.UserClassUncheckedCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classes?: Prisma.UserClassUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classes?: Prisma.UserClassUncheckedUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    name: string;
    password?: string;
    email: string;
    createdAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserCreateNestedOneWithoutPostsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPostsInput, Prisma.UserUncheckedCreateWithoutPostsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPostsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPostsInput, Prisma.UserUncheckedCreateWithoutPostsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPostsInput;
    upsert?: Prisma.UserUpsertWithoutPostsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPostsInput, Prisma.UserUpdateWithoutPostsInput>, Prisma.UserUncheckedUpdateWithoutPostsInput>;
};
export type UserCreateNestedOneWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProfileInput;
    upsert?: Prisma.UserUpsertWithoutProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutProfileInput, Prisma.UserUpdateWithoutProfileInput>, Prisma.UserUncheckedUpdateWithoutProfileInput>;
};
export type UserCreateNestedOneWithoutClassesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutClassesInput, Prisma.UserUncheckedCreateWithoutClassesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutClassesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutClassesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutClassesInput, Prisma.UserUncheckedCreateWithoutClassesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutClassesInput;
    upsert?: Prisma.UserUpsertWithoutClassesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutClassesInput, Prisma.UserUpdateWithoutClassesInput>, Prisma.UserUncheckedUpdateWithoutClassesInput>;
};
export type UserCreateWithoutPostsInput = {
    name: string;
    password?: string;
    email: string;
    createdAt?: Date | string;
    classes?: Prisma.UserClassCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutPostsInput = {
    id?: number;
    name: string;
    password?: string;
    email: string;
    createdAt?: Date | string;
    classes?: Prisma.UserClassUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutPostsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPostsInput, Prisma.UserUncheckedCreateWithoutPostsInput>;
};
export type UserUpsertWithoutPostsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPostsInput, Prisma.UserUncheckedUpdateWithoutPostsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPostsInput, Prisma.UserUncheckedCreateWithoutPostsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPostsInput, Prisma.UserUncheckedUpdateWithoutPostsInput>;
};
export type UserUpdateWithoutPostsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classes?: Prisma.UserClassUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPostsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classes?: Prisma.UserClassUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutProfileInput = {
    name: string;
    password?: string;
    email: string;
    createdAt?: Date | string;
    classes?: Prisma.UserClassCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutProfileInput = {
    id?: number;
    name: string;
    password?: string;
    email: string;
    createdAt?: Date | string;
    classes?: Prisma.UserClassUncheckedCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
};
export type UserUpsertWithoutProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutProfileInput, Prisma.UserUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutProfileInput, Prisma.UserUncheckedUpdateWithoutProfileInput>;
};
export type UserUpdateWithoutProfileInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classes?: Prisma.UserClassUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classes?: Prisma.UserClassUncheckedUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutClassesInput = {
    name: string;
    password?: string;
    email: string;
    createdAt?: Date | string;
    posts?: Prisma.PostCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutClassesInput = {
    id?: number;
    name: string;
    password?: string;
    email: string;
    createdAt?: Date | string;
    posts?: Prisma.PostUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutClassesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutClassesInput, Prisma.UserUncheckedCreateWithoutClassesInput>;
};
export type UserUpsertWithoutClassesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutClassesInput, Prisma.UserUncheckedUpdateWithoutClassesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutClassesInput, Prisma.UserUncheckedCreateWithoutClassesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutClassesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutClassesInput, Prisma.UserUncheckedUpdateWithoutClassesInput>;
};
export type UserUpdateWithoutClassesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: Prisma.PostUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutClassesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: Prisma.PostUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCountOutputType = {
    classes: number;
    posts: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classes?: boolean | UserCountOutputTypeCountClassesArgs;
    posts?: boolean | UserCountOutputTypeCountPostsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountClassesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserClassWhereInput;
};
export type UserCountOutputTypeCountPostsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PostWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    password?: boolean;
    email?: boolean;
    createdAt?: boolean;
    classes?: boolean | Prisma.User$classesArgs<ExtArgs>;
    posts?: boolean | Prisma.User$postsArgs<ExtArgs>;
    profile?: boolean | Prisma.User$profileArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    password?: boolean;
    email?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    password?: boolean;
    email?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    password?: boolean;
    email?: boolean;
    createdAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "password" | "email" | "createdAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classes?: boolean | Prisma.User$classesArgs<ExtArgs>;
    posts?: boolean | Prisma.User$postsArgs<ExtArgs>;
    profile?: boolean | Prisma.User$profileArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        classes: Prisma.$UserClassPayload<ExtArgs>[];
        posts: Prisma.$PostPayload<ExtArgs>[];
        profile: Prisma.$ProfilePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        password: string;
        email: string;
        createdAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    classes<T extends Prisma.User$classesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$classesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    posts<T extends Prisma.User$postsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    profile<T extends Prisma.User$profileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$profileArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$classesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserClassSelect<ExtArgs> | null;
    omit?: Prisma.UserClassOmit<ExtArgs> | null;
    include?: Prisma.UserClassInclude<ExtArgs> | null;
    where?: Prisma.UserClassWhereInput;
    orderBy?: Prisma.UserClassOrderByWithRelationInput | Prisma.UserClassOrderByWithRelationInput[];
    cursor?: Prisma.UserClassWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserClassScalarFieldEnum | Prisma.UserClassScalarFieldEnum[];
};
export type User$postsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostSelect<ExtArgs> | null;
    omit?: Prisma.PostOmit<ExtArgs> | null;
    include?: Prisma.PostInclude<ExtArgs> | null;
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput | Prisma.PostOrderByWithRelationInput[];
    cursor?: Prisma.PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PostScalarFieldEnum | Prisma.PostScalarFieldEnum[];
};
export type User$profileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
