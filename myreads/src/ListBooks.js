import React, { Component } from 'react'

class ListBooks extends Component{
  render(){
    return(
      <div className='list-books'>

        <div className='list-books-title'>
          <h1 className="top-bar-heading">MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>

{/*Currently Reading Section*/}
            <div className='bookshelf'>
              <h2>Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                          <div className="book-shelf-changer">
                            <select>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
            </div>

{/*Want to Read Section*/}
            <div className='bookshelf'>
              <h2>Want to Read</h2>
                <div className="bookshelf-books">
                  2
                </div>
            </div>

{/*Read Section*/}
            <div className='bookshelf'>
              <h2>Read</h2>
                <div className="bookshelf-books">
                  3
                </div>
            </div>

          </div>
        </div>

      </div>
    )
  }
}


export default ListBooks
