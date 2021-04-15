import React from 'react';
import Like from './like';
class Movies extends React.Component{

    

    state={
         movies : [
    
            {
                _id: 1,
                title: 'terminator',
                genre: { id: '123', name: 'Action'},
                numberInStock: 1,
                dailyRentalRate: 2.5,
                publishDate: '2019-01-03T19:04:28.809Z'
            },
        
            {
                _id: 2,
                title: 'Die hard',
                genre: { id: '124', name: 'Action'},
                numberInStock: 1,
                dailyRentalRate: 2.5,
                publishDate: '2019-01-03T19:04:28.809Z'
            },
            {
                _id: 3,
                title: 'Get out',
                genre: { id: '125', name: 'Thriller'},
                numberInStock: 1,
                dailyRentalRate: 2.5,
                publishDate: '2019-01-03T19:04:28.809Z'
            },
            {
                _id: 4,
                title: 'Trip to Itly',
                genre: { id: '126', name: 'Comedy'},
                numberInStock: 7,
                dailyRentalRate: 2.5,
                publishDate: '2019-01-03T19:04:28.809Z'
            },
            {
                _id: 5,
                title: 'Titanic',
                genre: { id: '127', name: 'Thriller'},
                numberInStock: 1,
                dailyRentalRate: 3.4,
                publishDate: '2019-01-03T19:04:28.809Z'
            },
            {
                _id: 6,
                title: 'Las vegas',
                genre: { id: '123', name: 'Comedy'},
                numberInStock: 4,
                dailyRentalRate: 2.2,
                publishDate: '2019-01-03T19:04:28.809Z'
            },
        
        ]
    }

    handleDelete(movie){
        const movies = this.state.movies.filter( m => m._id !== movie._id);
        this.setState({ movies })

        console.log(movies)
    }


    handleLike= (movie) =>{

        const  movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movie[index] = {...movies[index]};
        movies[index].liked = !movie[index].liked;

        this.setState({ movies })
        console.log("like clicked", movie)
    }

    render(){

        if (this.state.movies.length === 0 )
           return <p className="m-4">There are no movie in the list... </p>
        return(
            <div>
                <p className="m-4">Showing {this.state.movies.length} movies in the list...</p>

                <table className="table">
                 <thead>                
                     <tr>
                         <th>Title</th>    
                         <th>Genre</th>
                         <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                     </tr>
                </thead>
                     <tbody>

                          
                         {this.state.movies.map( movie => ( 
                         <tr key={movie._id}> 
                             <td>{movie.title}</td>
                             <td>{movie.genre.name}</td>
                             <td>{movie.numberInStock}</td>
                             <td>{movie.dailyRentalRate}</td>
                             <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)} /></td>
                             <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                         </tr>
                         ))}
                     </tbody>
        
             </table>
            </div>
        )
    }    
};    

export default Movies;