/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Select from 'react-select'

import { Box } from '../../../helpers/'
import { Button, Icon, Field } from '../..'

const selectOptions1 = [
  { value: 'Suppliers', label: 'Suppliers' },
  { value: 'Customers', label: 'Customers' },
  { value: 'Orders', label: 'Orders' },
  { value: 'Products', label: 'Products' },
  { value: 'Requests', label: 'Requests' },
  { value: 'Content', label: 'Content' },
  { value: 'Controls', label: 'Controls' },
]

const HeaderCmsMenuForm = ({ ...restProps }) => {
  return (
    <form>
      <Box {...restProps}>
        <Box position="relative" mb="10px">
          <Box>
            <Field
              id="cms-menu-field"
              type="search"
              css={css`
                border: 1px solid #e2e2e2;
                padding-right: 35px;
              `}
            />
          </Box>
          <Button
            type="submit"
            css={css`
              box-shadow: none;
              border: none;
              background-color: transparent;
              padding: 4px;
              position: absolute;
              right: 5px;
              top: 50%;
              transform: translateY(-50%);
              &:hover,
              &:focus {
                background-color: transparent;
              }
            `}
          >
            <Icon icon="search" />
          </Button>
        </Box>

        <Select
          options={selectOptions1}
          isSearchable={false}
          defaultValue={selectOptions1[2]}
          menuPlacement="auto"
          className="select"
          classNamePrefix="select"
          placeholder="Custom title"
          css={css`
            .select__control {
              border: 1px solid #e2e2e2 !important;
            }
            .select__placeholder,
            .select__single-value,
            .select__option {
              font-size: 12px !important;
            }
          `}
        />
      </Box>
    </form>
  )
}

export default HeaderCmsMenuForm
