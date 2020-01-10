//get color according to number
export const getNumberColor = num => {
    let color;
    switch(num) {
        case 1:
            color = 'blue';
            break;
        case 2:
            color = 'green';
            break;
        case 3:
            color = 'red';
            break;
        case 4:
            color = 'purple';
            break;
        case 5:
            color = '#46250c';
            break;            
        default:
            color = '#702f6f';
    }

    return color;
}