/* eslint-disable @typescript-eslint/no-explicit-any */
const SixDaysName = () => {
    const daysArr=['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date('2023-01-17T18:59:43.835Z');
    const day = d.getDay();
    const arr=daysArr.splice(day, daysArr.length);
    return [...arr, ...daysArr];
};

export default SixDaysName;