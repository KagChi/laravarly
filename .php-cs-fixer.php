<?php

return (new PhpCsFixer\Config())
    ->setRules([
        'braces' => [
            'position_after_functions_and_oop_constructs' => 'same',
        ],
    ])
    ->setFinder(
        PhpCsFixer\Finder::create()
            ->in(__DIR__)
            ->name('*.php')
    );
