export const createBill = (bill) => (
    $.ajax({
        method: "POST",
        url: "api/bills",
        data: {bill}
    })
);


export const updateBill = (bill) => (
    $.ajax({
        method: "PATCH",
        url: `/api/bills/${bill.id}`,
        data: {bill}
    })
);

export const fetchBill = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/bills/${id}`
    })
)


export const fetchBills = () => (
    $.ajax({
        method: "GET",
        url: "/api/bills"
    })
)

export const deleteBill = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/bills/${id}`
    })

);