import date from 'date-and-time';


/* eslint-disable @typescript-eslint/no-explicit-any */
const dateSubtractor = (dateStr: string) => {
    const publishedDate=new Date(dateStr);  
    const minutes=date.subtract(new Date(), publishedDate).toMinutes();  
    const hours=date.subtract(new Date(), publishedDate).toHours();  
    const days=date.subtract(new Date(), publishedDate).toDays();  
 
    if(days>365){
        return `${Math.trunc(days/365)} year ago`;
    }
    else if(days>30){
        return `${Math.trunc(days/30)} months ago`;
    }
    else if( days>=1 && days<30){
        return `${Math.trunc(days)} days ago`;
    }
    else if(hours<=24 && hours>=1){
        return `${Math.trunc(hours)} hours ago`;
    }
    else{
        return `${Math.trunc(minutes)|0} minutes ago`;
    }    
};

export default dateSubtractor;