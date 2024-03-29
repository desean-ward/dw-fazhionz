import styled, { css } from 'styled-components'

const FormElements = styled(css)`
  /* SASS varibles to substitue colors */
	$sub-color: grey;
	$main-color: black;

	/* Mixin to shrink the label and move it to the top */
	@mixin shrinkLabel {
		top: -14px;
		font-size: 12px;
		//color: $main-color;
	}
`

export const FormInputContainer = styled.div`
  ${ FormElements }
	position: relative;
	margin: 45px 0;

	input[type='password'] {
		letter-spacing: 0.3em;
	}

	.form-input-label {
		color: $sub-color;
		font-size: 16px;
		font-weight: normal;
		position: absolute;
		pointer-events: none;
		left: 5px;
		top: 10px;
		transition: 300ms ease all;

		&.shrink {
			@include shrinkLabel();
		}
	}
`

export const FormField = styled.input`
	background: none;
	background-color: white;
	color: $sub-color;
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid $sub-color;
	margin: 25px 0;

	&:focus {
		outline: none;
	}

	/* Applies the 'shrinkLabel' mixin when
        focused on an element with .forminput-label class */
	&:focus ~ .form-input-label {
		@include shrinkLabel();
	}
`

export const Label = styled.label`
	.form-input-label {
    color: $sub-color;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      @include shrinkLabel();
    }
  }
`
