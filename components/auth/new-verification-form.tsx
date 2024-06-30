"use client";

import { BeatLoader } from 'react-spinners';
import { CardWrapper } from './card-wrapper';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { newVerification } from '@/actions/new-verification';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import React from 'react'

const NewVerficiationForm = () => {

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("Missing Token!");
      return;
    }
    newVerification(token).then((data) => {
      setSuccess(data.success);
      setError(data.error);
    })
    .catch(() => {
      setError("Something went wrong!")
    })
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
    headerLabel='Confirming Your Verification'
    backButtonLabel='Back to login'
    backButtonHref='/auth/login'>
        <div className='flex items-center w-full justify-center'>
            {!success && !error && (
              <BeatLoader />
            )}
            <FormSuccess message={success}/>
            {!success && (
              <FormError message={error}/>
            )}
        </div>
    </CardWrapper>
  )
}

export default NewVerficiationForm