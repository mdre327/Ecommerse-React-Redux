import * as actionTypes from './prodActionType'

const INITIALSTATE={
    products:[
        {
        id: '1',
        title: 'shoes ',
        desc: 'thjis is the shoe desc here  itys s avery comfy shoes',
        amount: 1000.0,
        image: 'https://data.whicdn.com/images/286541006/original.jpg',
        },
        {
            id: '2',
            title: 'T-Shirt ',
            desc: '100%b cotton tshirrt  a very popular  shoes. a great quality',
            amount: 3000.0,
            image: 'https://i.pinimg.com/564x/1a/8f/1b/1a8f1be0f8c1e8ff4e2984acccec995b.jpg'
        },
        {
            id: '3',
            title: 'belt ',
            desc: ' this is a good quality belt made of pure leather thjis is the shoe desc here  itys s avery comfy shoes',
            amount: 2000.0,
            image: 'https://i.pinimg.com/564x/3a/3d/26/3a3d2603d62a471dce664fb7303fceda.jpg'
        },
        {
            id: '4',
            title: 'Sun Glasses ',
            desc: ' these are famous suun glasses, polaried , great quality .thjis is the shoe desc here  itys s avery comfy shoes',
            amount: 30.0,
            image: 'https://i.pinimg.com/564x/ef/0c/b2/ef0cb2382113743802bcc0706414e21d.jpg'
        }
            ],
    cart:[],
    currentItem:null,
    filterStar:[]
}

const prodReducer =(state= INITIALSTATE, action) =>{
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            //get item data from prod arr
            const item = state.products.find((prod )=> prod.id === action.payload.id)
            // check if is in cart state
            const incart= state.cart.find((item)=> item.id === action.payload.id ?true :false)
            return {
                ...state,
                cart: incart?
                 state.cart.map((item)=> item.id===action.payload.id 
                ?{...item,qty:item.qty+1}:item)
                :[...state.cart,{...item,qty:1}],
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart:state.cart.filter(item => item.id!==action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
           return {
                ...state,
                cart: state.cart.map((item) =>item.id===action.payload.id?{...item,qty:+action.payload.qty} : item )            
           }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                    ...state,
                    currentItem:action.payload
                }
        
        case actionTypes.FILTER_BY_COLOR:
            return {
                ...state,
                filterStar:state.products.filter(item =>item.id===action.payload.id )
            }
        default:
            return state
    }
}

export default prodReducer