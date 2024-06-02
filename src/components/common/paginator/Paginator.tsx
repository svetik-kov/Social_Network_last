import React, {useState} from 'react';
import s from './Paginator.module.css';
import cn from 'classnames'


type PropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number

}

export const Paginator = ({pageSize, totalItemsCount, currentPage, onPageChanged, portionSize = 20}: PropsType) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>}

            {pages
                .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, index) => {

                    return (
                        <span className={cn({[s.selectedPage]: currentPage === p}, s.pageNumber)}
                              key={index}
                              onClick={() => {
                                  onPageChanged(p)
                              }}>
                   {/* <span
                        className={currentPage === p ? s.selectedPage : ''}

                        key={index}
                        onClick={() => {
                            onPageChanged(p)
                        }}>*/}
                            {p}
                </span>)
                })}


            {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>Next</button>

            }
        </div>
    );
};

