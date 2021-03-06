import React, { useCallback } from 'react'
import { Button } from 'ui/styled-components'
import { PAGE_SIZE } from 'features/Bites/model/types'

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
            Загрузить ещё
        </Button>
    )
}