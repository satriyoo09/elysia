export const suscessResponse = (data: unknown, masage = "success") => ({
    success: true,
    masage,
    data
})

export const errorResponse = (masage: string, code = 400) => ({
    success: false,
    masage,
    code
})