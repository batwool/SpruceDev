function attachPhoneFormatter(elOrSelector) {
    const input = typeof elOrSelector === 'string' ? document.querySelector(elOrSelector) : elOrSelector;
    if (!input) throw new Error('Phone formatter: input element not found');

    let isComposing = false;
    const countDigits = str => (str.match(/\d/g) || []).length;
    const onlyDigits = str => (str.match(/\d/g) || []).join('');

    function stripToDigitsAndPlus(value) {
        if (!value) return { digits: '', hasPlus: false };
        const trimmed = value.trim();
        const hasPlus = trimmed.startsWith('+');
        const digits = onlyDigits(trimmed);
        return { digits, hasPlus };
    }

    function formatNumber(digits, hasPlus) {
        if (!digits) return hasPlus ? '+' : '';
        if (hasPlus) {
            const countryCodeLen = digits.length > 10 ? digits.length - 10 : (digits.length <= 3 ? digits.length : 1);
            const cc = digits.slice(0, countryCodeLen);
            const rest = digits.slice(countryCodeLen);
            const restGroups = rest.match(/.{1,3}/g) || [];
            return '+' + cc + (restGroups.length ? ' ' + restGroups.join(' ') : '');
        }
        if (digits[0] === '1' && digits.length > 1) {
            if (digits.length === 1) return '1';
            if (digits.length <= 4) return '1 ' + digits.slice(1);
            if (digits.length <= 7) return '1 (' + digits.slice(1, 4) + ') ' + digits.slice(4);
            const area = digits.slice(1, 4);
            const mid = digits.slice(4, 7);
            const last = digits.slice(7, 11);
            const tail = digits.slice(11);
            return '1 (' + area + ') ' + mid + (last ? '-' + last : '') + (tail ? ' ' + tail.match(/.{1,3}/g).join(' ') : '');
        }
        if (digits.length <= 3) return digits;
        if (digits.length <= 6) return '(' + digits.slice(0, 3) + ') ' + digits.slice(3);
        if (digits.length <= 10) return '(' + digits.slice(0, 3) + ') ' + digits.slice(3, 6) + '-' + digits.slice(6);
        const base = '(' + digits.slice(0, 3) + ') ' + digits.slice(3, 6) + '-' + digits.slice(6, 10);
        const rest = digits.slice(10);
        const restGroups = rest.match(/.{1,3}/g) || [];
        return base + (restGroups.length ? ' ' + restGroups.join(' ') : '');
    }

    function formattedIndexForDigitIndex(formatted, digitIndex, hasPlus, origCursor) {
        if (digitIndex <= 0) {
            if (hasPlus && origCursor > 0) {
                const plusPos = formatted.indexOf('+');
                return plusPos >= 0 ? plusPos + 1 : 0;
            }
            const firstDigit = formatted.search(/\d/);
            return firstDigit === -1 ? 0 : firstDigit;
        }
        let seen = 0;
        for (let i = 0; i < formatted.length; i++) {
            if (/\d/.test(formatted[i])) {
                seen++;
                if (seen === digitIndex) return i + 1;
            }
        }
        return formatted.length;
    }

    function onInput() {
        if (isComposing) return;
        const start = input.selectionStart ?? 0;
        const end = input.selectionEnd ?? 0;
        const rawValue = input.value;
        const digitsBeforeStart = countDigits(rawValue.slice(0, start));
        const digitsBeforeEnd = countDigits(rawValue.slice(0, end));
        const { digits, hasPlus } = stripToDigitsAndPlus(rawValue);
        const newFormatted = formatNumber(digits, hasPlus);
        if (newFormatted !== rawValue) {
            input.value = newFormatted;
            const newStart = formattedIndexForDigitIndex(newFormatted, digitsBeforeStart, hasPlus, start);
            const newEnd = formattedIndexForDigitIndex(newFormatted, digitsBeforeEnd, hasPlus, end);
            const clamp = n => Math.max(0, Math.min(newFormatted.length, n));
            input.setSelectionRange(clamp(newStart), clamp(newEnd));
        }
    }

    input.addEventListener('compositionstart', () => (isComposing = true));
    input.addEventListener('compositionend', () => { isComposing = false; onInput(); });
    input.addEventListener('paste', () => setTimeout(onInput, 0));
    input.addEventListener('input', onInput);
    onInput();
}
