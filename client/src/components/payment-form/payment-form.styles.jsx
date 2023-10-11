import tw, { styled } from "twin.macro";

export const PaymentFormContainer = styled.div`
  ${tw`
        h-[300px]
        flex flex-col items-center justify-center
        border-2 border-red-900
        p-4
    `}
`;

export const FormContainer = styled.form`
  ${tw`
        h-[100px]
        min-w-[500px]
    `}
`;
