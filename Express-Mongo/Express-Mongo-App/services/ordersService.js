import ordersModel from "../models/ordersModels.js";

export const createOrder = async ({ name, location }) => {
  const response = await ordersModel.create({ name, location });
  return response;
};

export const findAllOrders = async () => {
  return await ordersModel.find({});
};

export const findNearestOrder = async (location) => {
  const response = await ordersModel.findOne({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: location,
        },
        $maxDistance: 1000, 
      },
    },
  });
  return response;
};