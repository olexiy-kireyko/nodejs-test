export const notFoundHandler = (req, res, next) => {
  res.status(404).json({ message: 'route not founded' });
};
