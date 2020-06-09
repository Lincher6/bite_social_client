import React, { useCallback } from 'react'
import { Button } from '../../../common'
import { PAGE_SIZE } from '../../model/types'

export const LoadMore = ({ offset, setOffset, haveMore }) => {

    const incrementOffset = useCallback(() => {
        setOffset(offset + PAGE_SIZE)
    }, [setOffset, offset])

    return (
        <Button
            color='primary'
            variant='contained'
            onClick={incrementOffset}
            disabled={!haveMore}
        >
            Загрузть ещё
        </Button>
    )
}