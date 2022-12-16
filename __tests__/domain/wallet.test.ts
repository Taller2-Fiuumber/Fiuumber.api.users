import {expect, test} from '@jest/globals';
import { Wallet } from '../../src/domain/wallet';

test('creates a new wallet', () => {

    const wallet = new Wallet(
        "1",
        '0xb5B5001d4dcFc32738Dcff1C329b074eF987AEE2',
        '0xb5B5001d4dcFc3afasdadasdasda2738Dcff1C329b074eF987AEE2',
        );
    expect(wallet._id).toBe("1");
    expect(wallet.address).toBe('0xb5B5001d4dcFc32738Dcff1C329b074eF987AEE2');
    expect(wallet.privateKey).toBe('0xb5B5001d4dcFc3afasdadasdasda2738Dcff1C329b074eF987AEE2');
});
