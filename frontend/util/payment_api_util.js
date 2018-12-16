export const createPayment = (payment) => (
    $.ajax({
        method: "POST",
        url: "api/payments",
        data: { payment }
    })
);

