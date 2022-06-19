<div class="employees form">
<?php echo $this->Form->create('Employee'); ?>
	<fieldset>
		<legend><?php echo __('Edit Employee'); ?></legend>
	<?php
		$options = array(
			'ADIUNKT' => 'adiunkt', 
			'ASYSTENT' => 'asystent', 
			'DOKTORANT' => 'doktorant', 
			'DYREKTOR' => 'dyrektor', 
			'PROFESOR' => 'profesor', 
			'SEKRETARKA' => 'sekretarka'
		);
		echo $this->Form->input('id');
		echo $this->Form->input('nazwisko');
		echo $this->Form->input('imie');
		echo $this->Form->input(
			'etat', 
			array(
				'type' => 'select', 
				'options' => $options,
			)
		);
		echo $this->Form->input('id_szefa');
		echo $this->Form->input('zatrudniony');
		echo $this->Form->input('placa_pod');
		echo $this->Form->input('placa_dod');
		echo $this->Form->input('id_zesp');
	?>
	</fieldset>
<?php echo $this->Form->end(__('Submit')); ?>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>

		<li><?php echo $this->Form->postLink(__('Delete'), array('action' => 'delete', $this->Form->value('Employee.id')), array('confirm' => __('Are you sure you want to delete # %s?', $this->Form->value('Employee.id')))); ?></li>
		<li><?php echo $this->Html->link(__('List Employees'), array('action' => 'index')); ?></li>
	</ul>
</div>