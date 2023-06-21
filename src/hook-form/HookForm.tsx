import { useForm } from 'react-hook-form';

interface IForm {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  password_check: string;
  extraError?: string;
}

export default function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
    },
  });
  const onVaild = (data: IForm) => {
    if (data.password !== data.password_check) {
      setError(
        'password',
        { message: '입력한 패스워드가 일치하지 않습니다.' },
        { shouldFocus: true }
      );
    }
    // 에러를 설정할 수 있음 ex) 서버에러등
    // setError('extraError', { message: 'Server offline.' });
  };

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
      <span>{errors?.email?.message}</span>
      <input
        type='text'
        {...register('first_name', {
          required: '이름을 입력해주세요',
          validate: (value) =>
            value.includes('nico') ? '이름에 nico를 포함시키지마세요' : true,
          minLength: { value: 5, message: '이름 너무 짧아요' },
        })}
        placeholder='First Name'
      />
      <span>{errors?.first_name?.message}</span>
      <input
        type='text'
        {...register('last_name', {
          required: '성을 입력해주세요',
          validate: {
            noNico: (value) =>
              value.includes('nico') ? '이름에 nico를 포함시키지마세요' : true,
            noNick: (value) =>
              value.includes('nick') ? '이름에 nick를 포함시키지마세요' : true,
          },
        })}
        placeholder='Last Name'
      />
      <span>{errors?.last_name?.message}</span>
      <input
        type='text'
        {...register('password', { required: '비밀번호를 입력해주세요' })}
        placeholder='Password'
      />
      <span>{errors?.password?.message}</span>
      <input
        type='text'
        {...register('password_check', {
          required: '두개의 비밀번호가 맞지않습니다',
        })}
        placeholder='Password Check'
      />
      <span>{errors?.password_check?.message}</span>
      <button>Add</button>
      <span>{errors?.extraError?.message}</span>
    </form>
  );
}
