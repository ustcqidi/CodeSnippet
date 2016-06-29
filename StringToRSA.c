unsigned char* peer_rsa_public_key = "-----BEGIN RSA PUBLIC KEY-----
MEgCQQDn7OOIZRkW6zSNIkArpVYEfn/ASq8NPR6HtlsNGHCjDBcMjmIR9GwO5c4f
AVM7A5+RRQyGPJ+tCYB21kKdLu0pAgMBAAE=
-----END RSA PUBLIC KEY-----
";

BIO *rsa_bio = BIO_new(BIO_s_mem());
int peer_rsa_public_key_len = strlen(peer_rsa_public_key)-1;

int bio_ret = BIO_write(rsa_bio, peer_rsa_public_key, peer_rsa_public_key_len);
ngx_log_debug1(NGX_LOG_DEBUG_EVENT, c->log, 0, "MoguSSL, bio_ret is %d" ,bio_ret);

RSA *peer_rsa = RSA_new();
PEM_read_bio_RSAPublicKey(rsa_bio, &peer_rsa, NULL, NULL);
