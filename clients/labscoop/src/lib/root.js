import styled from '@emotion/styled'
import theme from './theme'
import 'react-id-swiper/lib/styles/css/swiper.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css'

const Root = styled.div`
  font-family: ${theme.fontFamily.base};
  line-height: 1.5;
  color: ${theme.colors.base};
  font-size: 14px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  > div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .content {
    flex: 1;
  }
  header,
  footer {
    flex-shrink: 0;
  }

  a {
    transition: all 200ms ease;
  }

  .ScrollbarsCustom-Thumb,
  .ScrollbarsCustom-Track {
    border-radius: 0 !important;
  }

  .ScrollbarsCustom-Track {
    width: 4px !important;
    background-color: #d7e0f8 !important;
  }
  .ScrollbarsCustom-Thumb {
    background-color: ${theme.colors.primary} !important;
  }

  .ScrollbarsCustom.trackXVisible {
    &.trackXVisible {
      .ScrollbarsCustom-TrackX {
        left: 0 !important;
        width: 100% !important;
        height: 2px !important;
      }
    }
  }

  .displayed-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .read-more-button {
    cursor: pointer;
    color: ${theme.colors.primary};
    font-family: ${theme.fontFamily.bold};
    display: inline-flex;
    align-items: center;
    &:after {
      content: '';
      width: 14px;
      height: 14px;
      margin-left: 5px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 8px;
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI5Mi40IDI5Mi40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOTIuNCAyOTIuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM3NTc1NzU7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yODYuOSw2OS40Yy0zLjYtMy42LTcuOS01LjQtMTIuOC01LjRIMTguM2MtNSwwLTkuMiwxLjgtMTIuOSw1LjRDMS44LDczLDAsNzcuMywwLDgyLjIKCQljMCw0LjksMS44LDkuMiw1LjQsMTIuOEwxMzMuMywyMjNjMy42LDMuNiw3LjksNS40LDEyLjksNS40czkuMi0xLjgsMTIuOC01LjRMMjg2LjksOTUuMWMzLjYtMy42LDUuNC03LjksNS40LTEyLjgKCQlDMjkyLjQsNzcuMywyOTAuNSw3MywyODYuOSw2OS40eiIvPgo8L2c+Cjwvc3ZnPgo=');
    }
  }
  .css-yuf5kf-Popovers {
    align-items: center;
  }

  .footer-select {
    text-transform: uppercase;
    font-size: 10px;
    font-family: ${theme.fontFamily.bold};
    .footer-select__control {
      box-shadow: none;
      border-radius: 0;
    }
    .footer-select__indicator-separator {
      display: none;
    }
    .footer-select__option {
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      &--is-selected {
        background-color: #f5f8fc;
        color: ${theme.colors.black};
      }
    }
  }

  .select {
    text-transform: none;
    font-family: ${theme.fontFamily.bold};
    .select__control {
      box-shadow: none;
      border-radius: 0;
      border: none;
      border-bottom: 2px solid #b8b8b8;
      min-height: 37px;
      &--menu-is-open {
        border-bottom-color: ${theme.colors.primary};
      }
    }
    .select__menu {
      z-index: 60;
      overflow: hidden;
    }
    .select__menu-list {
      padding-top: 0;
      padding-bottom: 0;
    }
    .select__indicator {
      padding: 7px;
    }
    .select__indicator-separator {
      display: none;
    }
    .select__option {
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &--is-selected,
      &:hover {
        background-color: #f5f8fc;
        color: ${theme.colors.black};
      }
    }
    .select__placeholder {
      color: ${theme.colors.black};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .select__value-container {
      margin-top: -2px;
    }
  }
  .select-small {
    .select__control {
      min-height: 30px;
      .select__indicator {
        padding: 4px;
      }
    }
  }
  .react-datepicker {
    .react-datepicker__day--selected {
      background-color: ${theme.colors.primary};
    }
  }

  .Collapsible__trigger {
    width: auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
    border-style: solid;
    border-width: 1px;
    border-color: ${theme.colors.primary};
    transition: all 200ms ease;
    font-size: 14px;
    font-weight: normal;
    font-family: ${theme.fontFamily.bold};
    text-decoration: none;
    line-height: 1.4;
    padding: 8px 28px;
    cursor: pointer;
    color: ${theme.colors.primary};
    background: ${theme.colors.white};
    box-shadow: none;
    &:hover,
    &:focus {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
    }
  }

  .collapse-content {
    margin-top: 15px;
  }

  .rc-slider {
    .rc-slider-track {
      background-color: ${theme.colors.primary};
    }

    .rc-slider-handle {
      border-color: ${theme.colors.primary};
      &:focus {
        box-shadow: 0 0 5px ${theme.colors.primary};
      }
    }

    .rc-slider-mark {
      .rc-slider-mark-text {
        color: ${theme.colors.black};
        &:first-of-type {
          transform: translateX(-6px) !important;
        }
        &:last-of-type {
          transform: translateX(-26px) !important;
        }
      }
    }
  }
`

export default Root
