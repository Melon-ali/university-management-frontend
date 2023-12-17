import { IAcademicDepartment, IMeta } from "@/types";
import { baseApi } from "../baseApi";
import { tagTypes } from "@/redux/tag-types";
import { departmentApi } from "../departmentApi";

const ACADEMIC_DEPARTMENT_URL = "/academic-departments";

export const academicDepartmentApi = baseApi.injectEndpoints({
    endpoints: (build)  => ({
        // get all academic departments
        academicDepartments: build.query({
            query: (arg: Record<string, any>) => {
                return {
                    url: ACADEMIC_DEPARTMENT_URL,
                    method: "GET",
                    params: arg,
                };
            },
            transformErrorResponse: (response: IAcademicDepartment[], meta: IMeta) => {
                return {
                    academicDepartments: response,
                    meta,
                };
            },
            providesTags: [tagTypes.academicDepartment]
        }),
        // get single academic department
        academicDepartment: build.query({
            query: (id: string | string[] | undefined) => ({
                url: `${ACADEMIC_DEPARTMENT_URL}/${id}`,
                method: "GET",       
            }),
            providesTags: [tagTypes.academicDepartment],
        }),
        // create a new academic department
        addAcademicDepartment: build.mutation({
            query: (data) => ({
                url: ACADEMIC_DEPARTMENT_URL,
                method: "POST",
                data,
            }),
        }),
        // update ac department
        updateAcademicDepartment: build.mutation({
            query: (data) => ({
                url: `${ACADEMIC_DEPARTMENT_URL}/${data.id}`,
                method: "PATCH",
                data: data.body,
            }),
            invalidatesTags: [tagTypes.academicDepartment],
        }),
        // delete ac department
        deleteAcademicDepartment: build.mutation({
            query: (id) => ({
                url: `${ACADEMIC_DEPARTMENT_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.academicDepartment],
        }),
    }),
}); 

export const {
    useAcademicDepartmentsQuery,
    useAcademicDepartmentQuery,
    useAddAcademicDepartmentMutation,
    useDeleteAcademicDepartmentMutation,
    useUpdateAcademicDepartmentMutation,
} = academicDepartmentApi;