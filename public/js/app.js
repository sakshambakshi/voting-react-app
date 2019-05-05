// class Product extends React.Component {

//     handleUpVote = () => {
//         this.props.onVote(this.props.id)
//     }

//     render() {
//         return (
//             <div className='item'>
//                 <div className='image'>
//                     <img src={this.props.productImageUrl}/>
//                 </div>
//                 <div className='middle aligned content'>
//                     <div className='header'>
//                         <a onClick={this.handleUpVote}>
//                             <i className='large caret up icon'/>
//                         </a>
//                         {this.props.votes}
//                     </div>
//                     <div className='description'>
//                         <a href={this.props.url}>{this.props.title}</a>
//                         <p>{this.props.description}</p>
//                     </div>
//                     <div className='extra'>
//                         <span>Submitted by:</span>
//                         <img className='ui avatar image' src={this.props.submitterAvatarUrl}/>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// class ProductList extends React.Component {

//     componentDidMount() {
//         this.setState({products: Seed.products})
//     }

//     state = {
//             products: [],
//         };

//     handleProductUpVote = (productID) => {
//         console.log(productID + 'was upvoted.');

//         const nextProducts = this.state.products.map((product) => {
//             if (product.id === productID) {
//                 return Object.assign({}, product, {
//                     votes: product.votes + 1
//                 })
//             } else {
//                 return product
//             }
//         });

//         this.setState({
//             products: nextProducts
//         });

//     };

//     render() {
//         const products = this.state.products.sort((a, b) => (
//             b.votes - a.votes
//         ));
//         const productComponents = products.map((product) => (
//             <Product
//                 key={'product-' + product.id}
//                 id={product.id}
//                 title={product.title}
//                 description={product.description}
//                 url={product.url}
//                 votes={product.votes}
//                 submitterAvatarUrl={product.submitterAvatarUrl}
//                 productImageUrl={product.productImageUrl}
//                 onVote={this.handleProductUpVote}
//             />
//         ));

//         return (
//             <div className='ui stackable items'>
//                 {productComponents}
//             </div>
//         );
//     }
// }


// ReactDOM.render(
//     <ProductList/>,
//     document.getElementById('content')
// );


class Product extends React.Component{
     handleUpVote =  () => {
        console.log(this.props.id)
        this.props.onVote(this.props.id);
        }
    render(){
        
        return(
            <div className="item">
                <div className="image">
                    <img src={this.props.productImageUrl} />
                </div>
                <div className="middle aligned content">
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                                <i className='large caret up icon' />
                        </a>
                                {this.props.votes}
                    </div>
                    <div className="description">
                        <a href={this.props.url} >{this.props.title} </a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="extra">
                        <span>Submitted by:</span>
                    </div>
                    <img
                        className='ui avatar image'
                        src={this.props.submitterAvatarUrl}
                        />
                </div>
            </div>
        )

    }

}



class ProductList extends React.Component{
   
        state = {
            products: [],
        };

    componentDidMount(){;
        
        this.setState({ products: Seed.products  });
    }

    handleProductUpVote =   (productId) =>  {
       console.log(productId + ' was upvoted.');
       const newProduct = this.state.products.map((product) =>{
           if(product.id === productId){
               return Object.assign({} , product , {
                   votes: product.votes + 1 
               })
           } else {
               return product ; 
           }
       });
       this.setState({
           products: newProduct 
       })
       
        
       }
    render(){
        const data = [...Seed.products];
    
        console.log(data);
        // this.setState({ products: Seed.products})
        
        const products = this.state.products.sort((a,b )=>(
            b.votes - a.votes
        ))
            // console.log(products)
        const productComponent = products.map(product =>(
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote = {this.handleProductUpVote}
            />
        ))  ;
        console.log(productComponent)
        return(
            <div className="ui unstackable items">
                            
                {/* Hello, friend! I am a basic React component. */}
                {/* <Product
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}                    
                ></Product> */}
                {productComponent}
            </div>
        )
    }
}


// ReactDom.render(<Product /> , document.getElementById('content'))
ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
    );