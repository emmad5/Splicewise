export const createPayment = (payment) => (
    $.ajax({
        method: "POST",
        url: "api/payments",
        data: { payment }
    })
);

export const fetchPayment = (id) => (
    $.ajax({
        method: "GET",
        url: `api/payments${id}`
    })
)
export const fetchPayments = () => (
    $.ajax({
        method: "GET",
        url: `api/payments`
    })
)

