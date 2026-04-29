import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserClassModel = runtime.Types.Result.DefaultSelection<Prisma.$UserClassPayload>;
export type AggregateUserClass = {
    _count: UserClassCountAggregateOutputType | null;
    _avg: UserClassAvgAggregateOutputType | null;
    _sum: UserClassSumAggregateOutputType | null;
    _min: UserClassMinAggregateOutputType | null;
    _max: UserClassMaxAggregateOutputType | null;
};
export type UserClassAvgAggregateOutputType = {
    id: number | null;
    classId: number | null;
    userId: number | null;
};
export type UserClassSumAggregateOutputType = {
    id: number | null;
    classId: number | null;
    userId: number | null;
};
export type UserClassMinAggregateOutputType = {
    id: number | null;
    classId: number | null;
    userId: number | null;
};
export type UserClassMaxAggregateOutputType = {
    id: number | null;
    classId: number | null;
    userId: number | null;
};
export type UserClassCountAggregateOutputType = {
    id: number;
    classId: number;
    userId: number;
    _all: number;
};
export type UserClassAvgAggregateInputType = {
    id?: true;
    classId?: true;
    userId?: true;
};
export type UserClassSumAggregateInputType = {
    id?: true;
    classId?: true;
    userId?: true;
};
export type UserClassMinAggregateInputType = {
    id?: true;
    classId?: true;
    userId?: true;
};
export type UserClassMaxAggregateInputType = {
    id?: true;
    classId?: true;
    userId?: true;
};
export type UserClassCountAggregateInputType = {
    id?: true;
    classId?: true;
    userId?: true;
    _all?: true;
};
export type UserClassAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserClassWhereInput;
    orderBy?: Prisma.UserClassOrderByWithRelationInput | Prisma.UserClassOrderByWithRelationInput[];
    cursor?: Prisma.UserClassWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserClassCountAggregateInputType;
    _avg?: UserClassAvgAggregateInputType;
    _sum?: UserClassSumAggregateInputType;
    _min?: UserClassMinAggregateInputType;
    _max?: UserClassMaxAggregateInputType;
};
export type GetUserClassAggregateType<T extends UserClassAggregateArgs> = {
    [P in keyof T & keyof AggregateUserClass]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserClass[P]> : Prisma.GetScalarType<T[P], AggregateUserClass[P]>;
};
export type UserClassGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserClassWhereInput;
    orderBy?: Prisma.UserClassOrderByWithAggregationInput | Prisma.UserClassOrderByWithAggregationInput[];
    by: Prisma.UserClassScalarFieldEnum[] | Prisma.UserClassScalarFieldEnum;
    having?: Prisma.UserClassScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserClassCountAggregateInputType | true;
    _avg?: UserClassAvgAggregateInputType;
    _sum?: UserClassSumAggregateInputType;
    _min?: UserClassMinAggregateInputType;
    _max?: UserClassMaxAggregateInputType;
};
export type UserClassGroupByOutputType = {
    id: number;
    classId: number;
    userId: number;
    _count: UserClassCountAggregateOutputType | null;
    _avg: UserClassAvgAggregateOutputType | null;
    _sum: UserClassSumAggregateOutputType | null;
    _min: UserClassMinAggregateOutputType | null;
    _max: UserClassMaxAggregateOutputType | null;
};
type GetUserClassGroupByPayload<T extends UserClassGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserClassGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserClassGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserClassGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserClassGroupByOutputType[P]>;
}>>;
export type UserClassWhereInput = {
    AND?: Prisma.UserClassWhereInput | Prisma.UserClassWhereInput[];
    OR?: Prisma.UserClassWhereInput[];
    NOT?: Prisma.UserClassWhereInput | Prisma.UserClassWhereInput[];
    id?: Prisma.IntFilter<"UserClass"> | number;
    classId?: Prisma.IntFilter<"UserClass"> | number;
    userId?: Prisma.IntFilter<"UserClass"> | number;
    class?: Prisma.XOR<Prisma.ClassScalarRelationFilter, Prisma.ClassWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type UserClassOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    class?: Prisma.ClassOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type UserClassWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    userId_classId?: Prisma.UserClassUserIdClassIdCompoundUniqueInput;
    AND?: Prisma.UserClassWhereInput | Prisma.UserClassWhereInput[];
    OR?: Prisma.UserClassWhereInput[];
    NOT?: Prisma.UserClassWhereInput | Prisma.UserClassWhereInput[];
    classId?: Prisma.IntFilter<"UserClass"> | number;
    userId?: Prisma.IntFilter<"UserClass"> | number;
    class?: Prisma.XOR<Prisma.ClassScalarRelationFilter, Prisma.ClassWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_classId">;
export type UserClassOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.UserClassCountOrderByAggregateInput;
    _avg?: Prisma.UserClassAvgOrderByAggregateInput;
    _max?: Prisma.UserClassMaxOrderByAggregateInput;
    _min?: Prisma.UserClassMinOrderByAggregateInput;
    _sum?: Prisma.UserClassSumOrderByAggregateInput;
};
export type UserClassScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserClassScalarWhereWithAggregatesInput | Prisma.UserClassScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserClassScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserClassScalarWhereWithAggregatesInput | Prisma.UserClassScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"UserClass"> | number;
    classId?: Prisma.IntWithAggregatesFilter<"UserClass"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"UserClass"> | number;
};
export type UserClassCreateInput = {
    class: Prisma.ClassCreateNestedOneWithoutUsersInput;
    user: Prisma.UserCreateNestedOneWithoutClassesInput;
};
export type UserClassUncheckedCreateInput = {
    id?: number;
    classId: number;
    userId: number;
};
export type UserClassUpdateInput = {
    class?: Prisma.ClassUpdateOneRequiredWithoutUsersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutClassesNestedInput;
};
export type UserClassUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    classId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type UserClassCreateManyInput = {
    id?: number;
    classId: number;
    userId: number;
};
export type UserClassUpdateManyMutationInput = {};
export type UserClassUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    classId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type UserClassListRelationFilter = {
    every?: Prisma.UserClassWhereInput;
    some?: Prisma.UserClassWhereInput;
    none?: Prisma.UserClassWhereInput;
};
export type UserClassOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserClassUserIdClassIdCompoundUniqueInput = {
    userId: number;
    classId: number;
};
export type UserClassCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type UserClassAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type UserClassMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type UserClassMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type UserClassSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type UserClassCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.UserClassCreateWithoutClassInput, Prisma.UserClassUncheckedCreateWithoutClassInput> | Prisma.UserClassCreateWithoutClassInput[] | Prisma.UserClassUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.UserClassCreateOrConnectWithoutClassInput | Prisma.UserClassCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.UserClassCreateManyClassInputEnvelope;
    connect?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
};
export type UserClassUncheckedCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.UserClassCreateWithoutClassInput, Prisma.UserClassUncheckedCreateWithoutClassInput> | Prisma.UserClassCreateWithoutClassInput[] | Prisma.UserClassUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.UserClassCreateOrConnectWithoutClassInput | Prisma.UserClassCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.UserClassCreateManyClassInputEnvelope;
    connect?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
};
export type UserClassUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.UserClassCreateWithoutClassInput, Prisma.UserClassUncheckedCreateWithoutClassInput> | Prisma.UserClassCreateWithoutClassInput[] | Prisma.UserClassUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.UserClassCreateOrConnectWithoutClassInput | Prisma.UserClassCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.UserClassUpsertWithWhereUniqueWithoutClassInput | Prisma.UserClassUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.UserClassCreateManyClassInputEnvelope;
    set?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    disconnect?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    delete?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    connect?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    update?: Prisma.UserClassUpdateWithWhereUniqueWithoutClassInput | Prisma.UserClassUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.UserClassUpdateManyWithWhereWithoutClassInput | Prisma.UserClassUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.UserClassScalarWhereInput | Prisma.UserClassScalarWhereInput[];
};
export type UserClassUncheckedUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.UserClassCreateWithoutClassInput, Prisma.UserClassUncheckedCreateWithoutClassInput> | Prisma.UserClassCreateWithoutClassInput[] | Prisma.UserClassUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.UserClassCreateOrConnectWithoutClassInput | Prisma.UserClassCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.UserClassUpsertWithWhereUniqueWithoutClassInput | Prisma.UserClassUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.UserClassCreateManyClassInputEnvelope;
    set?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    disconnect?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    delete?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    connect?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    update?: Prisma.UserClassUpdateWithWhereUniqueWithoutClassInput | Prisma.UserClassUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.UserClassUpdateManyWithWhereWithoutClassInput | Prisma.UserClassUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.UserClassScalarWhereInput | Prisma.UserClassScalarWhereInput[];
};
export type UserClassCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserClassCreateWithoutUserInput, Prisma.UserClassUncheckedCreateWithoutUserInput> | Prisma.UserClassCreateWithoutUserInput[] | Prisma.UserClassUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserClassCreateOrConnectWithoutUserInput | Prisma.UserClassCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserClassCreateManyUserInputEnvelope;
    connect?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
};
export type UserClassUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserClassCreateWithoutUserInput, Prisma.UserClassUncheckedCreateWithoutUserInput> | Prisma.UserClassCreateWithoutUserInput[] | Prisma.UserClassUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserClassCreateOrConnectWithoutUserInput | Prisma.UserClassCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserClassCreateManyUserInputEnvelope;
    connect?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
};
export type UserClassUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserClassCreateWithoutUserInput, Prisma.UserClassUncheckedCreateWithoutUserInput> | Prisma.UserClassCreateWithoutUserInput[] | Prisma.UserClassUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserClassCreateOrConnectWithoutUserInput | Prisma.UserClassCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserClassUpsertWithWhereUniqueWithoutUserInput | Prisma.UserClassUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserClassCreateManyUserInputEnvelope;
    set?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    disconnect?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    delete?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    connect?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    update?: Prisma.UserClassUpdateWithWhereUniqueWithoutUserInput | Prisma.UserClassUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserClassUpdateManyWithWhereWithoutUserInput | Prisma.UserClassUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserClassScalarWhereInput | Prisma.UserClassScalarWhereInput[];
};
export type UserClassUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserClassCreateWithoutUserInput, Prisma.UserClassUncheckedCreateWithoutUserInput> | Prisma.UserClassCreateWithoutUserInput[] | Prisma.UserClassUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserClassCreateOrConnectWithoutUserInput | Prisma.UserClassCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserClassUpsertWithWhereUniqueWithoutUserInput | Prisma.UserClassUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserClassCreateManyUserInputEnvelope;
    set?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    disconnect?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    delete?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    connect?: Prisma.UserClassWhereUniqueInput | Prisma.UserClassWhereUniqueInput[];
    update?: Prisma.UserClassUpdateWithWhereUniqueWithoutUserInput | Prisma.UserClassUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserClassUpdateManyWithWhereWithoutUserInput | Prisma.UserClassUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserClassScalarWhereInput | Prisma.UserClassScalarWhereInput[];
};
export type UserClassCreateWithoutClassInput = {
    user: Prisma.UserCreateNestedOneWithoutClassesInput;
};
export type UserClassUncheckedCreateWithoutClassInput = {
    id?: number;
    userId: number;
};
export type UserClassCreateOrConnectWithoutClassInput = {
    where: Prisma.UserClassWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserClassCreateWithoutClassInput, Prisma.UserClassUncheckedCreateWithoutClassInput>;
};
export type UserClassCreateManyClassInputEnvelope = {
    data: Prisma.UserClassCreateManyClassInput | Prisma.UserClassCreateManyClassInput[];
    skipDuplicates?: boolean;
};
export type UserClassUpsertWithWhereUniqueWithoutClassInput = {
    where: Prisma.UserClassWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserClassUpdateWithoutClassInput, Prisma.UserClassUncheckedUpdateWithoutClassInput>;
    create: Prisma.XOR<Prisma.UserClassCreateWithoutClassInput, Prisma.UserClassUncheckedCreateWithoutClassInput>;
};
export type UserClassUpdateWithWhereUniqueWithoutClassInput = {
    where: Prisma.UserClassWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserClassUpdateWithoutClassInput, Prisma.UserClassUncheckedUpdateWithoutClassInput>;
};
export type UserClassUpdateManyWithWhereWithoutClassInput = {
    where: Prisma.UserClassScalarWhereInput;
    data: Prisma.XOR<Prisma.UserClassUpdateManyMutationInput, Prisma.UserClassUncheckedUpdateManyWithoutClassInput>;
};
export type UserClassScalarWhereInput = {
    AND?: Prisma.UserClassScalarWhereInput | Prisma.UserClassScalarWhereInput[];
    OR?: Prisma.UserClassScalarWhereInput[];
    NOT?: Prisma.UserClassScalarWhereInput | Prisma.UserClassScalarWhereInput[];
    id?: Prisma.IntFilter<"UserClass"> | number;
    classId?: Prisma.IntFilter<"UserClass"> | number;
    userId?: Prisma.IntFilter<"UserClass"> | number;
};
export type UserClassCreateWithoutUserInput = {
    class: Prisma.ClassCreateNestedOneWithoutUsersInput;
};
export type UserClassUncheckedCreateWithoutUserInput = {
    id?: number;
    classId: number;
};
export type UserClassCreateOrConnectWithoutUserInput = {
    where: Prisma.UserClassWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserClassCreateWithoutUserInput, Prisma.UserClassUncheckedCreateWithoutUserInput>;
};
export type UserClassCreateManyUserInputEnvelope = {
    data: Prisma.UserClassCreateManyUserInput | Prisma.UserClassCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserClassUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserClassWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserClassUpdateWithoutUserInput, Prisma.UserClassUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserClassCreateWithoutUserInput, Prisma.UserClassUncheckedCreateWithoutUserInput>;
};
export type UserClassUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserClassWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserClassUpdateWithoutUserInput, Prisma.UserClassUncheckedUpdateWithoutUserInput>;
};
export type UserClassUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserClassScalarWhereInput;
    data: Prisma.XOR<Prisma.UserClassUpdateManyMutationInput, Prisma.UserClassUncheckedUpdateManyWithoutUserInput>;
};
export type UserClassCreateManyClassInput = {
    id?: number;
    userId: number;
};
export type UserClassUpdateWithoutClassInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutClassesNestedInput;
};
export type UserClassUncheckedUpdateWithoutClassInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type UserClassUncheckedUpdateManyWithoutClassInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type UserClassCreateManyUserInput = {
    id?: number;
    classId: number;
};
export type UserClassUpdateWithoutUserInput = {
    class?: Prisma.ClassUpdateOneRequiredWithoutUsersNestedInput;
};
export type UserClassUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    classId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type UserClassUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    classId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type UserClassSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    classId?: boolean;
    userId?: boolean;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userClass"]>;
export type UserClassSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    classId?: boolean;
    userId?: boolean;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userClass"]>;
export type UserClassSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    classId?: boolean;
    userId?: boolean;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userClass"]>;
export type UserClassSelectScalar = {
    id?: boolean;
    classId?: boolean;
    userId?: boolean;
};
export type UserClassOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "classId" | "userId", ExtArgs["result"]["userClass"]>;
export type UserClassInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserClassIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserClassIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $UserClassPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserClass";
    objects: {
        class: Prisma.$ClassPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        classId: number;
        userId: number;
    }, ExtArgs["result"]["userClass"]>;
    composites: {};
};
export type UserClassGetPayload<S extends boolean | null | undefined | UserClassDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserClassPayload, S>;
export type UserClassCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserClassCountAggregateInputType | true;
};
export interface UserClassDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserClass'];
        meta: {
            name: 'UserClass';
        };
    };
    findUnique<T extends UserClassFindUniqueArgs>(args: Prisma.SelectSubset<T, UserClassFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClassClient<runtime.Types.Result.GetResult<Prisma.$UserClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserClassFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClassClient<runtime.Types.Result.GetResult<Prisma.$UserClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserClassFindFirstArgs>(args?: Prisma.SelectSubset<T, UserClassFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClassClient<runtime.Types.Result.GetResult<Prisma.$UserClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserClassFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserClassFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClassClient<runtime.Types.Result.GetResult<Prisma.$UserClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserClassFindManyArgs>(args?: Prisma.SelectSubset<T, UserClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserClassCreateArgs>(args: Prisma.SelectSubset<T, UserClassCreateArgs<ExtArgs>>): Prisma.Prisma__UserClassClient<runtime.Types.Result.GetResult<Prisma.$UserClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserClassCreateManyArgs>(args?: Prisma.SelectSubset<T, UserClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserClassCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserClassDeleteArgs>(args: Prisma.SelectSubset<T, UserClassDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClassClient<runtime.Types.Result.GetResult<Prisma.$UserClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserClassUpdateArgs>(args: Prisma.SelectSubset<T, UserClassUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClassClient<runtime.Types.Result.GetResult<Prisma.$UserClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserClassDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserClassUpdateManyArgs>(args: Prisma.SelectSubset<T, UserClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserClassUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserClassUpsertArgs>(args: Prisma.SelectSubset<T, UserClassUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClassClient<runtime.Types.Result.GetResult<Prisma.$UserClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserClassCountArgs>(args?: Prisma.Subset<T, UserClassCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserClassCountAggregateOutputType> : number>;
    aggregate<T extends UserClassAggregateArgs>(args: Prisma.Subset<T, UserClassAggregateArgs>): Prisma.PrismaPromise<GetUserClassAggregateType<T>>;
    groupBy<T extends UserClassGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserClassGroupByArgs['orderBy'];
    } : {
        orderBy?: UserClassGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserClassFieldRefs;
}
export interface Prisma__UserClassClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    class<T extends Prisma.ClassDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClassDefaultArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserClassFieldRefs {
    readonly id: Prisma.FieldRef<"UserClass", 'Int'>;
    readonly classId: Prisma.FieldRef<"UserClass", 'Int'>;
    readonly userId: Prisma.FieldRef<"UserClass", 'Int'>;
}
export type UserClassFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserClassSelect<ExtArgs> | null;
    omit?: Prisma.UserClassOmit<ExtArgs> | null;
    include?: Prisma.UserClassInclude<ExtArgs> | null;
    where: Prisma.UserClassWhereUniqueInput;
};
export type UserClassFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserClassSelect<ExtArgs> | null;
    omit?: Prisma.UserClassOmit<ExtArgs> | null;
    include?: Prisma.UserClassInclude<ExtArgs> | null;
    where: Prisma.UserClassWhereUniqueInput;
};
export type UserClassFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserClassFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserClassFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserClassCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserClassSelect<ExtArgs> | null;
    omit?: Prisma.UserClassOmit<ExtArgs> | null;
    include?: Prisma.UserClassInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserClassCreateInput, Prisma.UserClassUncheckedCreateInput>;
};
export type UserClassCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserClassCreateManyInput | Prisma.UserClassCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserClassCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserClassSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserClassOmit<ExtArgs> | null;
    data: Prisma.UserClassCreateManyInput | Prisma.UserClassCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserClassIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserClassUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserClassSelect<ExtArgs> | null;
    omit?: Prisma.UserClassOmit<ExtArgs> | null;
    include?: Prisma.UserClassInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserClassUpdateInput, Prisma.UserClassUncheckedUpdateInput>;
    where: Prisma.UserClassWhereUniqueInput;
};
export type UserClassUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserClassUpdateManyMutationInput, Prisma.UserClassUncheckedUpdateManyInput>;
    where?: Prisma.UserClassWhereInput;
    limit?: number;
};
export type UserClassUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserClassSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserClassOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserClassUpdateManyMutationInput, Prisma.UserClassUncheckedUpdateManyInput>;
    where?: Prisma.UserClassWhereInput;
    limit?: number;
    include?: Prisma.UserClassIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserClassUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserClassSelect<ExtArgs> | null;
    omit?: Prisma.UserClassOmit<ExtArgs> | null;
    include?: Prisma.UserClassInclude<ExtArgs> | null;
    where: Prisma.UserClassWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserClassCreateInput, Prisma.UserClassUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserClassUpdateInput, Prisma.UserClassUncheckedUpdateInput>;
};
export type UserClassDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserClassSelect<ExtArgs> | null;
    omit?: Prisma.UserClassOmit<ExtArgs> | null;
    include?: Prisma.UserClassInclude<ExtArgs> | null;
    where: Prisma.UserClassWhereUniqueInput;
};
export type UserClassDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserClassWhereInput;
    limit?: number;
};
export type UserClassDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserClassSelect<ExtArgs> | null;
    omit?: Prisma.UserClassOmit<ExtArgs> | null;
    include?: Prisma.UserClassInclude<ExtArgs> | null;
};
export {};
