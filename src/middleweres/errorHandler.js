export const errorHandler = (res, req, next) => {
    res.status(500).json({
        message: 'Something went wrong',
        date: errorHandler.message,
    });
};
