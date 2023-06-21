import { useForm } from 'react-hook-form';

interface IForm {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  password_check: string;
}

export default function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
    },
  });
  const onVaild = (data) => {};

  return (
    <form
      onSubmit={handleSubmit(onVaild)}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <input
        type='text'
        {...register('email', {
          required: '이메일을 입력해주세요',
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: '네이버의 이메일만 입력 가능합니다.',
          },
        })}
        placeholder='Email'
      />
      {errors.email && <span>{errors?.email?.message + ''}</span>}
      <input
        type='text'
        {...register('first_name', {
          required: '이름을 입력해주세요',
          minLength: { value: 5, message: 'Your password is too short' },
        })}
        placeholder='First Name'
      />
      {errors.first_name && <span>{errors?.first_name?.message + ''}</span>}
      <input
        type='text'
        {...register('last_name', { required: '성을 입력해주세요' })}
        placeholder='Last Name'
      />
      {errors.last_name && <span>{errors?.last_name?.message + ''}</span>}
      <input
        type='text'
        {...register('password', { required: '비밀번호를 입력해주세요' })}
        placeholder='Password'
      />
      {errors.password && <span>{errors?.password?.message + ''}</span>}
      <input
        type='text'
        {...register('password_check', {
          required: '두개의 비밀번호가 맞지않습니다',
        })}
        placeholder='Password Check'
      />
      {errors.password_check && (
        <span>{errors?.password_check?.message + ''}</span>
      )}
      <button>Add</button>
    </form>
  );
}
