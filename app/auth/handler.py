import time
import jwt
from decouple import config
JWT_SECRET = config('JWT_SECRET')
JWT_ALGORITHM = config('JWT_ALGORITHM')
def signJWT(user_id: str):
    payload = {
        'user id': user_id,
        'expired': time.time() + 600 
    }
    token = jwt.encode(payload, key=JWT_SECRET, algorithm=JWT_ALGORITHM)

    return { "access token": token}

def decodeJWT(token: str):
        decoded_token = jwt.decode(token, key=JWT_SECRET, algorithms=JWT_ALGORITHM)

        return decoded_token if decoded_token['expires'] >= time.time() else None