export function generateId(seed){
    const getRnd = (limit) => Math.floor(Math.random() * limit);

    const [closureA , closureB] = [seed * getRnd(10) , seed * getRnd(10)];
    const closureC = (closureA + closureB) * getRnd(10);

    return closureC;
}