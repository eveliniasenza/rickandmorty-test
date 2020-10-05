import React from 'react';
import {LIMITS} from "../../containers/HomeContainer";
import styles from './Pagination.module.css';
import classnames from 'classnames'

const Pagination = ({
  page,
  setPage,
  totalPages,
  limit,
  setLimit
}) => {
  const increasePage = () => {
    if (page + 1 > totalPages) {
      return setPage(totalPages)
    }

    return setPage(page + 1)
  }

  const decreasePage = () => {
    if (page - 1 === 0) {
      return setPage(1)
    }

    setPage(page - 1)
  }

  return (
    <div className={styles.pagination}>
      <div className={styles['input-container']}>
        <div
          onClick={decreasePage}
          className={classnames(styles.inline, styles['arrow-left'])}
        >
          <i className="fas fa-angle-left" />
        </div>
        <div className={styles.numbers}>
          { [...Array(totalPages)].map((item, index) => (
            <span
              key={index + 1}
              onClick={() => {
                setPage(index + 1)
              }}
              className={classnames(styles.number, {'active': index + 1 === page})}
            >
              { index + 1 }
            </span>
          ))}
        </div>
        <div
          className={classnames(styles.inline, styles['arrow-right'])}
          onClick={increasePage}
        >
          <i className="fas fa-angle-right" />
        </div>
        <div className={styles.inline}>
          <span>show</span>
        </div>
        <div className={styles.inline}>
          <select
            className={classnames('browser-default custom-select', styles.select)}
            onChange={ev => setLimit(ev.target.value)}
          >
            { LIMITS.map(_limit => (
              <option value={_limit} selected={_limit === limit}>{_limit}</option>
            )) }
          </select>
        </div>
        <div className={styles.inline}>
          <span>items</span>
        </div>
      </div>
    </div>
  )
}

export default Pagination;
