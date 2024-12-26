import api from "./api";

// User Management APIs
export const getUsers = (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return api.get(`/user/read${queryString ? `?${queryString}` : ""}`);
};
export const addUser = (data) => api.post("/user/create-user", data);
export const updateUser = (userId, data) => api.put(`/user/admin-update-user/${userId}`, data);
export const deleteUser = (userId) => api.delete(`/user/delete/${userId}`);

// Airline Management APIs
export const getAirlines = () => api.get("/Airline");
export const addAirline = (data) => api.post("/Airline/CreateAirline", data);
export const updateAirline = (airlineId, data) => api.put(`/Airline/${airlineId}`, data);
export const deleteAirline = (airlineId) => api.delete(`/Airline/${airlineId}`);

// Airport Management APIs
export const getAirports = () => api.get("/Airport");
export const addAirport = (data) => api.post("/Airport/CreateAirport", data);
export const updateAirport = (airportId, data) => {
    return api.put(`/Airport/${airportId}`, {
        AirportId: airportId,
        airportCode: data.airportCode,
        airportName: data.airportName,
        cityId: data.cityId,
    });
};
export const deleteAirport = (airportId) => api.delete(`/Airport/${airportId}`);

// City Management APIs
export const getCities = () => api.get("/City");
export const addCity = (data) => api.post("/City", data);
export const updateCity = (cityId, data) => api.put(`/City/${cityId}`, data);
export const deleteCity = (cityId) => api.delete(`/City/${cityId}`);

// Flight Management APIs
export const getFlights = () => api.get("/Flight");
export const getFlightById = (id) => api.get(`/Flight/${id}`);
export const searchFlights = (params) => {
    const queryString = new URLSearchParams(params).toString();
    return api.get(`/Flight/Search${queryString ? `?${queryString}` : ""}`);
};
export const createFlight = (data) => api.post("/Flight", data);
export const updateFlight = (id, data) => api.put(`/Flight/${id}`, data);
export const deleteFlight = (id) => api.delete(`/Flight/${id}`);

// Flight Seat Allocation APIs
export const getSeatAllocationsByFlightId = (flightId) => api.get(`/FlightSeatAllocation/${flightId}`);
export const addSeatAllocation = (data) => api.post("/FlightSeatAllocation", data);
export const updateSeatAllocation = (id, data) => api.put(`/FlightSeatAllocation/${id}`, data);
export const deleteSeatAllocation = (id) => api.delete(`/FlightSeatAllocation/${id}`);
