export const getNumberColor = num => {
    switch(num) {
        case 1:
            return 'blue';
            break;
        case 2:
            return 'green';
            break;
        case 3:
            return 'red';
            break;
        case 4:
            return 'purple';
            break;
        case 5:
            return '#46250c';
            break;            
        default:
            return '#702f6f';
    }
}