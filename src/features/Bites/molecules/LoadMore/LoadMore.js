import React, { useCallback } from 'react'
import { Button } from '../../../common'
import { useSelector } from 'react-redux'
import { bitesSelectors } from '../../model'
import { PAGE_SIZE } from '../../model/types'

export const LoadMore = ({ offset, setOffset }) => {
    const haveMoreBites = useSelector(bitesSelectors.haveMoreBites)

    const incrementOffset = useCallback(() => {
        setOffset(offset + PAGE_SIZE)
    }, [setOffset, offset])

    return (
        <Button
            color='primary'
            variant='contained'
            onClick={incrementOffset}
            disabled={!haveMoreBites}
        >
            Загрузть ещё
        </Button>
    )
}