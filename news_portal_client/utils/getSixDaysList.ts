/* eslint-disable @typescript-eslint/no-explicit-any */
const getSixDaysList = () => {
    const daysArr=['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date();
    const day = d.getDay();
    const arr=daysArr.splice(day, daysArr.length);
    return [...arr, ...daysArr];
};

export default getSixDaysList;